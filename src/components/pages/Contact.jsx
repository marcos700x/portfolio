import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import CustomInput from '../CustomInput'
import ParticlesBackground from '../ParticlesJS/ParticlesBackground'
import TopBar from '../TopBar'


const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sjxa56i', 'template_x60jn1q', form.current, 'Pi9eFgBTZO2yV4WpF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='vh-100 d-flex flex-column justify-content-start justify-content-md-center align-items-center'>
      <TopBar />
      <ParticlesBackground />
      <div className="container mt-5 pt-5 mt-md-0 pt-md-0 d-flex flex-column justify-content-center align-items-center">
        <form className='p-3 d-flex flex-column gap-3' ref={form} onSubmit={sendEmail}>
          <h1 className='text-light display-2 fw-bold'>Contact</h1>
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <CustomInput type='text' name='user_name' placeholder='Name' autocomplete={'off'} />
            </div>
            <div className="col-12 col-md-6">
              <CustomInput type='email' name='user_email' placeholder='Email' autocomplete={'off'} />
            </div>
          </div>
          <CustomInput type='text' name='subject' placeholder='Subject' />
          <CustomInput isTextArea name='message' placeholder='Message' />

            <button className="rounded-0 fs-5" style={{width: 'min-content'}}> Submit </button>

        </form>
      </div>
    </div>
  )
}


export default Contact