import React, { useState } from "react";
import "../style/getintouch.css";
import handshake from "../images/handshake.png";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const GetinTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzS3mAttkyb0c9C06IGy5O53f5bg4pTOCPKrRQnfFMynS2KyET_1aNGYfJh-E_kskG_AA/exec";
  const form = document.forms["google-sheet"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        NotificationManager.success("thanks for contacting! 😊", "success");
      })
      .catch((error) => {
        NotificationManager.error("Error message", "Click me!", 5000, () => {
          alert("callback");
        });
      });
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="getintouch" id="GetinTouch">
      <h1>Get in Touch</h1>
      <div className="git_form">
        <div className="thankyou">
          <img src={handshake} alt="hand shake" />
          <h3>Thank You</h3>
          <h4>Do You Have Any Queries ?</h4>
        </div>

        <form
          className="contactform"
          onSubmit={handleSubmit}
          method="post"
          name="google-sheet"
        >
          <div className="name_email">
            <div className="formfield">
              <label htmlFor="name">Name</label>
              <input
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Kumar"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="formfield">
              <label htmlFor="email">Email</label>
              <input
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                type="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="formfield">
            <label htmlFor="message">Message</label>
            <textarea
              name="Message"
              value={message}
              on
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey There!"
              id="message"
              required
            />
          </div>

          <button className="submitbutton" type="submit">
            Submit
          </button>
          <NotificationContainer />
        </form>
      </div>
    </div>
  );
};

export default GetinTouch;

// "https://script.google.com/macros/s/AKfycbzS3mAttkyb0c9C06IGy5O53f5bg4pTOCPKrRQnfFMynS2KyET_1aNGYfJh-E_kskG_AA/exec"
