import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactStyle.css';


function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gorp7pf', 'template_fwf8gjs', form.current, 'CizOs_UrNoL5cKZbn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email Send!")
  };

  return (
    <div className='container'>
      <h3>CONTACT US</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name'/>
        <label>Email</label>
        <input type='email' name='user_email'/>
        <label>Message</label>
        <textarea name='message'/>
        <input type='submit' name='submit' className='button' value='send'/>
      </form>
    </div>
  );
};

export default ContactUs;