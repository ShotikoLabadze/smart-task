import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ugknly",
        "template_la6hmt6",
        form.current,
        "QQMgSHHBT4HDaTTNo"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="fields">
          <div className="input-field">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>

          <div className="input-field">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>

          <div className="input-field">
            <label>Message</label>
            <input type="text" name="message" />
          </div>
          <input className="btn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
