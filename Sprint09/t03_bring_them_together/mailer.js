const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function main(user, password) {
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
