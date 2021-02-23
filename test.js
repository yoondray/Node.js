const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1b20ac76e1093c",
        pass: "2a87bfc3e97a9b"
    }
};

const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log(info)
            return info.response;
        }
    }); 
};

let email_data = {
    from: 'yoohyun704@gmail.com',
    to : 'yoohyun704@gamil.com',
    subject: 'testing...',
    text : 'good luck for tomorrow'
}

send(email_data)




