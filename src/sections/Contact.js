import React from "react";
import Button from "../components/Button";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <p className="contact-text"></p>
      <div className="contact-cta">
        <Button text="say hello" link="mailto:marzie409@gmail.com" />
      </div>
    </div>
  );
}

export default Contact;
