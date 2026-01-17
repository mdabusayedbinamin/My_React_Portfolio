import React, { useState } from 'react';
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "64de5eb9-5e65-408b-9fd9-f52fd90621f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title" data-aos="fade-down">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left" data-aos="fade-right" data-aos-duration="1000">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" /> <p>mdabusayedbinamin@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" /> <p>+8801752522629</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" /> <p>Mirpur 10, Dhaka</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit} data-aos="fade-left" data-aos-duration="1000">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button className='contact-submit' type="submit">Submit Now </button>
          
          <span className="form-result" style={{color: result.includes("successfully") ? "#00ff88" : "#ff4d4d", fontSize: "18px", marginTop: "10px"}}>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;