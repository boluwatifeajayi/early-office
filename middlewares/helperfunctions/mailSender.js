const nodemailer = require("nodemailer")

const mailSender = async() =>{
    try{

        // config
        const transporter = nodemailer.createTransport({
          port : 465,
          host : "smtp.gmail.com",
          auth : {
            user : "info.earlyoffice@gmail.co",
            pass : "bsdgboajogzbgsyr"
          },
        })
        
        // Sending mail
        const sendmail = await transporter.sendMail({
          sender: "info.earlyoffice@gmail.com",
          to : "isaiahekundayo17@gmail.com",
          subject: "Test amil",
          text : "This is a test mail",
        })
    
        return sendmail
        
      }catch(error){
        console.log(error)
        return error
      }
}

module.exports = mailSender