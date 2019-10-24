import React, {useState} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';

export default function Contact(){
  const [state, setState]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  function handleChange(e){
    setState({...state,[e.target.name]:e.target.value});
    console.log(state)
  }

  async function handleSubmit(e){
    e.preventDefault()
    const {name,email,subject,message} = state 
    console.log(state)
    const form = await axios.post("/api/form",{
      name,
      email,
      subject,
      message
    });
    console.log(form)
  }

  return(
    <div className="page__container">
      <div className="welcome">
        <h1 className="main__title">Contact me:</h1>
        <div className="contactForm">
        <Form style={{marginTop:25,maxWidth:600}} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
            type="text"
            name="name"
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
            type="email"
            name="email"
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="subject">Subject:</Label>
            <Input
            type="text"
            name="subject"
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
            type="textarea"
            name="message"
            onChange={handleChange}
            />
          </FormGroup>
          
          <Button style={{width:175}} >Send Message</Button>
        
        </Form>
        </div>
      </div>
    </div>
  )
}