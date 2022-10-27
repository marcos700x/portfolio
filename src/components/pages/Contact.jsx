import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import CustomInput from '../CustomInput'
import ParticlesBackground from '../ParticlesJS/ParticlesBackground'
import TopBar from '../TopBar'
import { notifyError, notifySucess } from '../Toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const form = useRef();
  const [disableButton, setDisableButton] = useState(true)
  const [emailContent, setEmailContent] = useState({
  })
  
  const handleInput = ({ target: {name, value} }) => {
    setEmailContent({
      ...emailContent,
      [name]: value,
    })
  }
  


  const sendEmail = async(e) => {
    e.preventDefault();
try {
  await emailjs.sendForm('service_sjxa56i', 'template_x60jn1q', form.current, 'Pi9eFgBTZO2yV4WpF')
  notifySucess('Your email has been sent');
} catch (error) {
 notifyError(error) 
}
  };

  useEffect(() => {
    var inputs = document.querySelectorAll('.input')
    if(inputs[0].checkValidity() && inputs[1].checkValidity() && inputs[2].checkValidity() && inputs[3].checkValidity()){
      setDisableButton(false)
    }else{
      setDisableButton(true)
    }
  }, [emailContent])

  return (
    <div className='vh-100 d-flex flex-column justify-content-start justify-content-md-center align-items-center'>
      <TopBar />
      <ParticlesBackground />
      <ToastContainer/>
      <div className="container mt-5 pt-5 mt-md-0 pt-md-0 d-flex flex-column justify-content-center align-items-center">
        <form className='p-3 d-flex flex-column gap-3' ref={form} onSubmit={sendEmail}>
          <h1 className='text-light display-2 fw-bold'>Contact</h1>
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <CustomInput type='text' name='user_name' placeholder='Name' autocomplete={'off'} handleInput={handleInput}/>
            </div>
            <div className="col-12 col-md-6">
              <CustomInput type='email' name='user_email' placeholder='Email' autocomplete={'off'} handleInput={handleInput}/>
            </div>
          </div>
          <CustomInput type='text' name='subject' placeholder='Subject' handleInput={handleInput}/>
          <CustomInput isTextArea name='message' placeholder='Message' handleInput={handleInput}/>

            <button className="rounded-0 fs-5" style={{width: 'min-content'}} disabled={disableButton}> Submit </button>

        </form>
      </div>
    </div>
  )
}


export default Contact