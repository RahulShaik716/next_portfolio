// utils/sendEmail.js
import sgMail, { MailDataRequired } from "@sendgrid/mail";
type props = {
  from: string;
  text: string;
};

export async function sendEmail({ from, text }: props) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

  const msg: MailDataRequired = {
    to: process.env.EMAIL, // Change to your recipient
    from: process.env.FROM || "", // Change to your verified sender
    subject: "Recruiter from Portfolio Website - " + from,
    text: text,
    html: `<strong>{sender : ${from}, text : ${text}}</strong>`,
  };
  try {
    const response = await sgMail.send(msg);
    return response;
  } catch (error) {
    throw error;
  }
}
