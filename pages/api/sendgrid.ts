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

// TODO - req and res types

async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await sendgrid.send({
      to: "lol.louii.lin@gmail.com",
      from: "lol.louii.lin@gmail.com",
      subject: `${req.body.subject}`,
      html: `New message from ${req.body.name} ${
        req.body.company ? `of ${req.body.company}` : "(no company submitted)"
      }\n${req.body.message}\nYou can reply to them at ${req.body.email}`,
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
