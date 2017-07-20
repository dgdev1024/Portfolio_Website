///
/// \file   email.api.js
/// \brief  Routing our API email functions.
///

// Imports
const Express           = require("express");
const Nodemailer        = require("nodemailer");
const Router            = Express.Router();

// Create the email transport.
const Transport = Nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

// POST: Send an email.
Router.post("/send", (req, res) => {
    const { senderName,  senderEmail, senderSubject, body } = req.body;

    Transport.sendMail({
        from: `Dennis Griffin's Portfolio <${process.env.EMAIL_ADDRESS}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `Portfolio: ${senderSubject}`,
        html: `
            <p>
                Hey, you have a new message!<br />
                Sender: ${senderName} (${senderEmail})<br /><br />
                Message: <br /><br />
                ${body}
            </p>
        `
    }, err => {
        if (err) {
            return res.status(500).json({
                error: "Your message failed to send."
            });
        }

        return res.status(200).json({
            message: "Your message was sent!"
        });
    });
});

// Exports
module.exports = Router;