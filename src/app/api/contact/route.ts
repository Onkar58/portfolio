import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const name: string = formData.get("name") as string;
    const email: string = formData.get("email") as string;
    const subject: string = formData.get("subject") as string;
    const message: string = formData.get("message") as string;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_SENDER_ADDRESS,
        pass: process.env.APP_PASSWORD_GMAIL,
      },
    });
    const mailOptions = {
      from: {
        name: name,
        address: email,
      },
      to: [process.env.EMAIL_RECEIVER_ADDRESS],
      subject: "Contacting from the onkar58.dev",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contacting From Website</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  max-width: 600px;
                  margin: auto;
              }
              h2 {
                  color: #333;
              }
              p {
                  line-height: 1.6;
                  color: #555;
              }
              .details {
                  background-color: #f9f9f9;
                  padding: 15px;
                  border-left: 4px solid #0073e6;
                  margin-top: 10px;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  color: #777;
              }
              a {
                  color: #0073e6;
                  text-decoration: none;
              }
          </style>
      </head>
      <body>

          <div class="container">
              <h2>Query – from ${name} </h2>
              <p>Dear Sir/Mam,</p>
              <div class="details">
                  <h3>Personal Information:</h3>
                  <p><strong>Full Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Query: </strong> ${message}</p>
              </div>


              <p>Looking forward to your response.</p>

              <p><strong>${name}</strong><br>
              <a href="mailto:${email}">${email}</a><br>
              </p>

          </div>

      </body>
      </html>
    `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.log("Error while sending email", err);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
};
