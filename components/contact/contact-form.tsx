import { ErrorDescription } from "mongodb";
import React, { useEffect, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

async function sendContactData(contactDetails) {
  console.log(contactDetails);

  const body = JSON.stringify(contactDetails);

  console.log({ body });

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error(error + "Error sending contact data");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(""); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "pending") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: React.FormEvent) {
    console.log(event);
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      });
      console.log("sendContactData SEND");
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Message sent",
      message:
        "Thank you for contacting us. We will get back to you as soon as possible.",
    };
  }

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Message not sent",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit"> Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
