import React, { useState, useEffect } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState(); //pending, success, error||none
  const [requestError, setRequestError] = useState();
  const [msgDetail, setMsgDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (prop) => (e) => {
    setMsgDetail((prev) => ({ ...prev, [prop]: e.target.value }));
  };

  useEffect(() => {
    let timer;
    if (requestStatus === "success" || requestStatus === "error") {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  const sendMessage = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      const data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(msgDetail), // Convert msgDetail to JSON string
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { status, message } = await data.json();

      if (!status) {
        setRequestStatus("error");
        throw new Error(message) || "Something went wrong";
      } else {
        setRequestStatus("success");
        setMsgDetail({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Successfully sent message",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.body}>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={sendMessage}>
          <h2 className={classes.formTitle}>I am open to work with you!</h2>
          <div className={classes.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={msgDetail.name}
              onChange={handleChange("name")}
              placeholder="John help"
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={msgDetail.email}
              onChange={handleChange("email")}
              placeholder="john@domaim.com"
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              rows="5"
              id="message"
              onChange={handleChange("message")}
              value={msgDetail.message}
              placeholder="Write your request here"
              required
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </form>
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
    // <section className={classes.contact}>
    //   <h1>How Can I help you?</h1>
    //   <form className={classes.form} onSubmit={sendMessage}>
    //     <div className={classes.controls}>
    //       <div className={classes.control}>
    //         <label htmlFor="email">Your Email</label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={msgDetail.email}
    //           onChange={handleChange("email")}
    //           required
    //         />
    //       </div>
    //       <div className={classes.control}>
    //         <label htmlFor="name">Your Name</label>
    //         <input
    //           type="text"
    //           id="name"
    //           value={msgDetail.name}
    //           onChange={handleChange("name")}
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="message">Your Message</label>
    //       <textarea
    //         rows="5"
    //         id="message"
    //         onChange={handleChange("message")}
    //         value={msgDetail.message}
    //         required
    //       />
    //     </div>
    //     <div className={classes.actions}>
    //       <button>Send Message</button>
    //     </div>
    //   </form>
    // </section>
  );
};

export default ContactForm;
