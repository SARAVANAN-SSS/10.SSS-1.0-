import "./Form.css";

import React from "react";

const Form = () => {
  return (
  <div className="form">
    <form action="https://formspree.io/f/myyvzvga" method="POST">
      <label>Name</label>
      <input name="name" type="text" placeholder="Enter Your Name" required/>
      <label>Email</label>
      <input name="email" type="email" placeholder="Enter Your Email" required/>
      <label>Message</label>
      <textarea name="message" placeholder="Help me understand how I can help you?" required></textarea>
      <button className="btn">Send</button>
    </form>
  </div>
  );
};

export default Form;
