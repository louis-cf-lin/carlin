import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Copied from the `@sendgrid/mail` library as the import was not working as of writing this code
interface ResponseError extends Error {
  code: number;
  message: string;
  response: {
    headers: { [key: string]: string };
    body: string;
  };
}

function isResponseError(error: unknown): error is ResponseError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error &&
    "response" in error
  );
}

type ResponseData = {
  message?: string;
  error?: string;
};

async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const message = `
      Name: ${req.body.name}\r\n
      Email: ${req.body.email}\r\n
      Company: ${req.body.company || "(Company left blank)"}\r\n
      Subject: ${req.body.subject}\r\n
      Message: ${req.body.message}
    `;
    await sendgrid.send({
      to: "info@carlinpc.co.nz",
      from: "clin750@aucklanduni.ac.nz",
      subject: `A new message from ${req.body.name}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
  } catch (error) {
    if (isResponseError(error)) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
  return res.status(200).json({ message: "Ok" });
}

export default sendEmail;
