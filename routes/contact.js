var express = require('express');
var router = express.Router();
var mailerCtrl = require('../controllers/mailer.server.controller');

router.get('/', function(req, res) {
  res.render('contact', { title: 'Standup - Contact', message: '' });
});

router.post('/send-email', function(req, res) {
  mailerCtrl.sendMail(req, res);
  res.render('contact', { title: 'Standup - Contact', message: 'Message sent!' });
});

module.exports = router;
