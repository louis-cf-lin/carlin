import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import classes from "./ContactForm.module.scss";

type FormData = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  mailState: string;
  setMailState: Dispatch<SetStateAction<string>>;
};

const ContactForm: FC<Props> = ({ mailState, setMailState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (data) => {
    // if (Object.keys(errors).length > 0) return;
    if (!isValid) return;

    const res = await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { error } = await res.json();
    console.log(error);
    if (error) {
      return setMailState("ERROR");
    }

    console.log("donezo");
    return setMailState("SUCCESS");
  });

  return (
    <form
      onSubmit={onSubmit}
      className={`${classes.form} ${
        mailState === "SUCCESS" ? classes.success : ""
      } ${mailState === "ERROR" ? classes.error : ""}`}
    >
      <div
        className={`${classes.field} ${classes.name} ${
          errors.name ? classes.invalid : ""
        }`}
      >
        <label>Name*</label>
        <input
          {...register("name", {
            required: "Please enter your name",
            maxLength: 100,
          })}
          placeholder="Your name"
        />
        <p>{errors.name?.message}</p>
      </div>
      <div
        className={`${classes.field} ${classes.email} ${
          errors.email ? classes.invalid : ""
        }`}
      >
        <label>Email*</label>
        <input
          {...register("email", {
            required: "Please enter your email",
            maxLength: 100,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          placeholder="Your email"
        />
        <p>{errors.email?.message}</p>
      </div>
      <div
        className={`${classes.field} ${errors.company ? classes.invalid : ""}`}
      >
        <label>Company</label>
        <input
          {...register("company", {
            maxLength: 100,
          })}
          placeholder="Your company"
        />
        <p>{errors.company?.message}</p>
      </div>
      <div
        className={`${classes.field} ${errors.subject ? classes.invalid : ""}`}
      >
        <label>Subject*</label>
        <input
          {...register("subject", {
            required: "Please enter the subject of your message",
            maxLength: 200,
          })}
          placeholder="Subject of your message"
        />
        <p>{errors.subject?.message}</p>
      </div>
      <div
        className={`${classes.field} ${errors.message ? classes.invalid : ""}`}
      >
        <label>Message*</label>
        <textarea
          {...register("message", {
            required: "Please enter your message",
            maxLength: 500,
          })}
          placeholder="Start typing here"
          rows={4}
        />
        <p>{errors.message?.message}</p>
      </div>
      <button type="submit" className={classes.submit} title="Submit">
        Submit <i className="material-icons-outlined">arrow_forward</i>
      </button>
    </form>
  );
};

export default ContactForm;
