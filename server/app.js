const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const nocache = require('nocache')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

require('./configs/database')

const app_name = require('./package.json').name
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)

const app = express()

app.use(nocache())

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, process.env.NODE_ENV !== 'production')
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

//Nodemailer 
app.post('/api/form', (req,res)=>{
  nodemailer.createTestAccount((err,account)=>{
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <h5>Subject: ${req.body.subject}</h5>
      <p>${req.body.message}</p>
    `

    let transporter= nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth:{
      //     user : "carson28@ethereal.email",
      //     pass:'jcNRz2FK56hJAmX4hg'
      //   }
   
      service: "gmail",
    auth: {
        user: "xavier.crespo1@gmail.com",
        pass: process.env.GMAIL_PASSWORD
    }
    })
    let mailOptions={
      from: req.body.email,
      to :"xavier.crespo1@gmail.com",
      replyTo : req.body.email,
      subject : req.body.subject,
      text : req.body.message,
      html : htmlEmail
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        return(console.log(err))
      }
      else res.json({msg:"success"});
      console.log(info);
      
    });
  });
});

// Set the public folder to "~/client/build/"
// Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
app.use(express.static(path.join(__dirname, '../client/build')))

// Enable authentication using session + passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)
require('./passport')(app)


// app.use('/api', require('./routes/auth'))
// app.use('/api/countries', require('./routes/countries'))

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use('/api/*', (req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// For any other routes, redirect to the index.html file of React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Error handler
app.use((err, req, res, next) => {
  console.error('----- An error happened -----')
  console.error(err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500)

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === 'production') res.json(err)
    else
      res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))))
  }
})

module.exports = app
