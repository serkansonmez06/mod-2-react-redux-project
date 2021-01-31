import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class ContactComponent extends Component {
  state = { name: "", lastName: "", email:"", city: "", message: "" };
  handleChange = event => {
    
    this.setState({ [event.target.name]: event.target.value });
    console.log('test')
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('test')
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">First and Last Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="First and Last Name"
              onChange={this.handleChange}
            />
          </FormGroup>
         
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Boston/MA</option>
              <option>Cincinnati/OH </option>
              <option>Newark/NJ</option>
              
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="Type your message"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button type="submit" color="success">Send</Button>
        </Form>
      </div>
    );
  }
}

export default ContactComponent