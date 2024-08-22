import React, { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [msgDetail, setMsgDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (prop) => (e) => {
    setMsgDetail((prev) => ({ ...prev, [prop]: e.target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(msgDetail), // Convert msgDetail to JSON string
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { status } = await data.json();
    if (status) {
      setMsgDetail({
        name: "",
        email: "",
        message: "",
      });
    }
  };

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
