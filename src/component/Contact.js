import React from "react";

const ContactForm = () => {
  return (
    <div id="Contact" className="contact-section">
      <h1>CONTACT US</h1>
      <h3>
        info@gmail.com&nbsp; A-132 street no- 9 California&nbsp; +91-9014834892
      </h3>
      <div>
        <form className="form">
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <br />
          <input type="text" placeholder="SUBJECT" />
          <br />
          <textarea rows="10" col="200" name="myadress" placeholder="MESSAGE" />
          <button className="btn btn-form">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
