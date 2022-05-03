const express = require('express');
const app = express();
const db = require('./db');
const session = require('express-session');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const generator = require('generate-password');
const User = require('./models/user');

const host = 'localhost';
const port = process.env.PORT || 3000;


app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'some secret',
    // cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    resave: false,
    saveUninitialized: false,
}))


app.get('/', (req, res) => {
    res.render('index');
})


app.post('/remind', async (req, res) => {
    const user = await new User().findBy('email', req.body.email);
    if(user) {
        const newPassword = await generator.generate({numbers: true});
        user.password = bcrypt.hashSync(newPassword, 10);
        main(user, newPassword);
        user.save();
        res.render('index', {class: 'success', message: 'New password sent to your email'});
    } else {
        res.render('index', {class: 'error', message: 'No user with that email'});
    }

    
})


// async..await is not allowed in global scope, must use a wrapper
async function main(user, password) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'teresa.kuhic24@ethereal.email',
            pass: 'H8jEVd25wtk2CZMJec'
        }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Hello from Drakyla 👻" <teresa.kuhic24@ethereal.email>', // sender address
      to:  `${user.email}`, // list of receivers
      subject: "Password reminder ✔", // Subject line
    //   text: "Hello world?", // plain text body
      html: `<h1>Password reminder </h1>
            <p><b>Login: </b>${user.login}<br>
            <b>Password: </b>${password}</p>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
//   main().catch(console.error);



app.listen(port, () => console.log(`server is running on http://${host}:${port}`));

