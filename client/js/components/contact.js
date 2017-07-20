///
/// \file   contact.js
/// \brief  Shows the contact form.
///

// Imports
import React from "react";
import Axios from "axios";
import Escape from "html-escape";

///
/// \class  ContactForm
/// \brief  Shows the contact form.
///
class ContactForm extends React.Component {
    onNameInput (ev) {
        this.setState({ name: ev.target.value });
    }

    onEmailInput (ev) {
        this.setState({ email: ev.target.value });
    }

    onSubjectInput (ev) {
        this.setState({ subject: ev.target.value });
    }

    onMessageInput (ev) {
        this.setState({ message: ev.target.value });
    }

    onSendClicked (ev) {
        ev.preventDefault();

        Axios.post("/api/email/send", {
            senderName: Escape(this.state.name),
            senderEmail: this.state.email,
            senderSubject: Escape(this.state.subject),
            body: Escape(this.state.message)
        }).then(response => {
            alert(response.data.message);

            this.setState({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }).catch(err => {
            alert(err.response.data.error);
        });
    }

    constructor (props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
    }

    render () {
        return (
            <form onSubmit={this.onSendClicked.bind(this)}>
                <div className="dwg-contact-form-element">
                    <label htmlFor="name">Full Name:</label>
                    <input className="dwg-contact-form-input"
                           id="name"
                           type="text"
                           value={this.state.name}
                           onChange={this.onNameInput.bind(this)}
                           required />
                </div>
                <div className="dwg-contact-form-element">
                    <label htmlFor="email">Email Address:</label>
                    <input className="dwg-contact-form-input"
                           id="email"
                           type="email"
                           value={this.state.email}
                           onChange={this.onEmailInput.bind(this)}
                           required />
                </div>
                <div className="dwg-contact-form-element">
                    <label htmlFor="subject">Message Subject:</label>
                    <input className="dwg-contact-form-input"
                           id="subject"
                           type="text"
                           value={this.state.subject}
                           onChange={this.onSubjectInput.bind(this)}
                           required />
                </div>
                <div className="dwg-contact-form-element">
                    <label htmlFor="message">Message:</label>
                    <textarea className="dwg-contact-form-input dwg-contact-form-textarea"
                              id="message"
                              value={this.state.message}
                              onChange={this.onMessageInput.bind(this)}
                              required />
                </div>
                <button className="dwg-contact-submit" type="submit">
                    Send Message
                </button>
            </form>
        );
    }
};

// Exports
export default ContactForm;