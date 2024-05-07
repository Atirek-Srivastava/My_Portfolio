import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg"
import call_icon from '../../assets/call_icon.svg'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c42bac48-9619-4b72-8225-d22d42e1e5b9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const letterRef = useRef(null);

  

  useEffect(() => {
    const letter = letterRef.current;
    if (!letter) return;
    
    const bounce = () => {
      gsap.to(letter, { duration: 0.5, y: -20, ease: "power2.out" })
        .then(() => gsap.to(letter, { duration: 0.5, y: 0, ease: "power2.inOut" }))
        .then(bounce); // Recursive call for infinite loop
    };

    bounce(); // Start the initial bounce

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(letter); // Kill the animation to prevent memory leaks
    };
  }, [letterRef.current]);


  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-title"  ref={letterRef}>
          <h1 >Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
            I am excited about the possibility of joining a forward-thinking team where I can grow both personally and professionally. Please explore my portfolio to learn more about my work and achievements. Let's discuss how I can contribute to your organization's success.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>atirek2109@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+91-9315164281</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>Prayagraj Uttar Pradesh</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="Enter your email" placeholder="Enter your email"/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">
                Submit now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
