import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Css/contacts.css"




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
<>

<div className='mail'>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form" ref={form} onSubmit={sendEmail}>
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" name="user_name" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" name="user_email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea name="message" id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div>

    </>
  );
};