import { createTransport } from "nodemailer";
import Mailgen from "mailgen";
import "dotenv/config";
import { ISendEmailRequest } from "../interfaces";
import { AppError } from "../errors";

export const sendEmail = async ({ to, subject, text }: ISendEmailRequest) => {
  const tranporter = createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await tranporter
    .sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: text,
    })
    .then(() => {
      console.log("Email send with sucess");
    })
    .catch((err) => {
      console.log(err);
      throw new AppError("Error sending email, try again later", 500);
    });
};

export const resetPasswordTemplate = (
  userEmail: string,
  userName: string,
  protocol: string,
  host: string,
  resetToken: string
) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Kenzie Kars",
      link: process.env.FRONTEND_BASE_URL,
    },
  });

  const email = {
    body: {
      name: userName,
      intro:
        "You have received this email because a password reset request for your account was received.",
      action: {
        instructions: "Click the button below to reset your password:",
        button: {
          color: "#4529E6",
          text: "Reset your password",
          link: `${process.env.FRONTEND_BASE_URL}${process.env.RESET_PASSWORD_ROUTE}/${resetToken}`,
        },
      },
      outro:
        "If you did not request a password reset, no further action is required on your part.",
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: "Reset password - Kenzie Kars",
    text: emailBody,
  };

  return emailTemplate;
};
