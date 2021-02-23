require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'lucassaladini@gmail.com',
    to: 'lucassaladini@gmail.com',
    subject: 'Contato',
    text: 'Funciona!'
};

transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log('Error Occurs', err);
    } else {
        console.log('E-mail enviado!')
    }
});