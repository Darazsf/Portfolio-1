import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Css/style.css"



export default function Mail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gr70dbf', 'template_jook6ch', form.current, 'AEHnTAVWCgtZ3Lvmr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className='wrapper'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};