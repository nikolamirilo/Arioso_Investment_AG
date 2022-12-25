import nodemailer from "nodemailer";

const sendEmail = async () => {
  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "nikolamirilo@gmail.com", // generated ethereal user
      pass: "Rowing123.", // generated ethereal password
    },
  });

  // Send the email
  let info = await transporter.sendMail({
    from: '"Nikola Mirilo" <nikolamirilo@gmail.com>', // sender address
    to: '"Arioso Investment AG" <arioso-investment-ag@gmail.com>',
    subject: "Message Check",
    html: "Some free text",
  });

  console.log("Message sent: %s", info.messageId);
};
export default sendEmail;
