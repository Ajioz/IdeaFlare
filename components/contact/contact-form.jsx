import React, { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [msgDetail, setMsgDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (props) = (e) => {
    setMsgDetail((prev) => ({ ...prev, [props]: e.target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(msgDetail);
    const data = await fetch("/api/contact", {
      method: "POST",
      body: msgDetail,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = data.json();
    console.log(response);
  };

  return (
    <section className={classes.contact}>
      <h1>How Can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={msgDetail.email}
              onChange={handleChange("email")}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={msgDetail.name}
              onChange={handleChange("name")}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="5"
            id="message"
            onChange={handleChange("message")}
            value={msgDetail.message}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
