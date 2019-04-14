var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'kody7178@gmail.com',
         pass: 'Itskody18-'
     }
});

const mailOptions = {
  from: 'kody7178@gmail.com', // sender address
  to: 'mortek17@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if(err)
    console.log(err)
  else
    console.log(info);
});