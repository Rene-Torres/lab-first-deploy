const express = require("express");
const siteController = express.Router();
const nodemailer=require('nodemailer');

siteController.get('/send-mail', (req, res)=>{
  res.render('site/mailer')
})



siteController.post('/send-email', (req, res, next) => {
  let { email, subject, message } = req.body;

  const tp = nodemailer.createTransport({
    service :"Gmail",
    auth:{
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASSWORD
    }
  });

  tp.sendMail({
    from: '"My Awesome Bliss 👻" <renixo02@gmail.com>',
    to: email,
    subject: Subject,
    text: "Awesome Message",
    html: `<b>${message}</b>`
})
//.then(info => console.log(info))
//.catch(error => console.log(error))
res.send('Correo enviado');
  //res.render('message', { email, subject, message })
});


siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyDmsqiHyfwW5OBOax6qlJ2419HLTz29Cec" });
});

module.exports = siteController;
