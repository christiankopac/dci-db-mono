require('dotenv').config('/home/Documents/ckopac/dci-db-mongo/.env');

let nodemailer = require('nodemailer');
let bodyParser = require('body-parser');

exports.sendMail = function(req, res) {
  console.log(process.env.MAILER_USER);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    } 
  });
  let mailOptions = {
    from: process.env.MAILER_USER,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.body,
    html: req.body.body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message %s was sent %s', info.messageId, info.response);
      res.render('contact', { title: 'Standup -  Message Sent!', message: 'Message succesfully sent!' });
    }
  });
};