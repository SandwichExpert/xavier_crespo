import React, { useState } from 'react'

export default function About() {
  const [about, setAbout] = useState(0)

  function previous(e) {
    e.preventDefault()
    setAbout(about - 1)
  }

  function next(e) {
    e.preventDefault()
    setAbout(about + 1)
  }

  return (
    <div className="page__container">
      <div className="welcome">
        <h1 className="main__title">About me:</h1>
        <div className="about">
          {about === 0 ? (
            <div className="about__me">
              <div className="picture"></div>
              <div className="about__section">
                <p>
                  Following experiences in digital communication and Marketing,
                  I've decided to go into the technical side by learning web
                  development.
                  <br />
                  <br />I am now, after graduating from the <b>Ironhack</b>{' '}
                  bootcamp, looking for <b>my first job as a web developer</b>!
                  <br />
                  <br />
                  During this experience, I've realized how much I love coding
                  and how passionate I am about it. Organized and autonomous, I
                  am a quick-learner who loves to work in teams.
                  <br />
                  <br />I love to work with front-end technologies such as{' '}
                  <b>
                    <i className="fab fa-react"></i> ReactJs
                  </b>
                  . I want to learn new frameworks and languages. I'm also
                  interested in the back-end technologies. I've worked with the{' '}
                  <b>MongoDB</b>, <b>Postman</b>, <b>Javascript</b>,{' '}
                  <b>NodeJs</b>, <b>Express</b>, <b>HTML</b> and <b>CSS</b>.
                  <br />
                  <br />
                  For more info, check out my resume:{' '}
                  <a
                    href="https://pdfhost.io/v/sL4Vbmdsg_xavier_crespoCVpdf.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Click here
                  </a>
                </p>
                <button onClick={previous} className="button__styled">
            Skills
          </button>
              </div>
            </div>
          ) : (
            <div className="about__me">
              <div className="picture__passion"></div>
              <div className="about__section">
                <p>
                  I've been playing music for as long as I can remember. i've
                  started with the piano, then shifted to the guitar that I
                  still play to this day. I've also played the bass and synth.
                  My two current bands are:
                  <br />
                  <a href="https://soundcloud.com/standera" className="link">
                    Standera
                  </a>{' '}
                  <br />
                  <a
                    href="https://soundcloud.com/user-623272561"
                    className="link"
                  >
                    Deaf Crisis
                  </a>
                  <br />
                  <br />
                  My other main activity is sports. I love to box (English
                  boxing). I also run and do a bit of parkour. Ironically, I
                  also enjoy cooking and am a true food-lover!
                  <br />
                  <br />
                  All in all, I am a very passionate person, in love with the
                  depths we can find in trivial activities. I love to listen to
                  people and their stories, to learn from them and to find new
                  perspectives on things I thought I knew.
                  <br />
                  <br />
                  For more info, check out my resume:{' '}
                  <a
                    href="https://pdfhost.io/v/sL4Vbmdsg_xavier_crespoCVpdf.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Click here
                  </a>
                </p>
                <button onClick={next} className="button__styled">
            Passions
          </button>
              </div>
            </div>
          )}
      {/* <div className="buttons">
        {about !== 0 ? (
          <button onClick={previous} className="button__styled">
            Skills
          </button>
        ) : (
          <button onClick={next} className="button__styled">
            Passions
          </button>
        )}
      </div> */}
        </div>
      </div>
    </div>
  )
}
