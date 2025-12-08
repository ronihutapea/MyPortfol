import "./FormStyles.css";
import React from "react";

function Form() {
  return (
    <div className="form">
      <form
        action="mailto:hutapearoni64@gmail.com"
        method="post"
        encType="text/plain"
      >
        <label>Your Name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Subject</label>
        <input type="text" name="subject" />

        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type Your Message Here"
        ></textarea>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
