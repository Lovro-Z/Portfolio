import React, {Component} from 'react';
import './contact.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubjectChange(event) {
        this.setState({subject: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        alert(`You have submitted the following data:\nEmail: ${this.state.email} \nSubject: ${this.state.subject} \nMessage: ${this.state.message}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="my-container">
                <h1>Contact me</h1>
                <Form className="my-form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail" required="required" value={this.state.email} onChange={this.handleEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSubject">
                        <Form.Control type="text" placeholder="Subject" required="required" value={this.state.subject} onChange={this.handleSubjectChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Control as="textarea" rows="10" required="required" placeholder="Your message..." value={this.state.message} onChange={this.handleMessageChange}/>
                    </Form.Group>
                    <Button id="submit-btn" variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Contact;
