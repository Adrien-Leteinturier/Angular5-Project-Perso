const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
var mailer = require('nodemailer');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/action',function(req,res,next){
  console.log(req);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'adrienleteinturier@gmail.com',
    from: req.body.email,
    subject: 'Message de ' + req.body.username +', Adrien Leteinturier site Web',
    text: req.body.message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg, function(error, response){
    if(error){
      console.log("Erreur lors de l'envoie du mail!");
      console.log(error);
    }else{
      console.log("Mail envoyé avec succès!")
      console.log(msg);
    }
  });
});


const port = process.env.PORT || '80';
app.set('port',port);

const server = http.createServer(app);
server.listen(port,function(){
  console.log('Running Baby');
});


module.exports = app;