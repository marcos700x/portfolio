import React, { useContext, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import CustomInput from '../CustomInput'
import { notifyError, notifySucess } from '../Toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';
import { AppContext } from '../../context/Context';
import CustomButton from '../CustomButton';
import Menu from '../Menu';


const Contact = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()

  const form = useRef();
  const [disableButton, setDisableButton] = useState(true)
  const [emailContent, setEmailContent] = useState({
  })


  const handleInput = ({ target: { name, value } }) => {
    setEmailContent({
      ...emailContent,
      [name]: value,
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('service_sjxa56i', 'template_x60jn1q', form.current, 'Pi9eFgBTZO2yV4WpF')
      notifySucess('Your email has been sent');
      setEmailContent({})
    } catch (error) {
      notifyError(error)
    }
  };

  useEffect(() => {
    var inputs = document.querySelectorAll('.input')
    if (inputs[0].checkValidity() && inputs[1].checkValidity() && inputs[2].checkValidity() && inputs[3].checkValidity()) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [emailContent])

  return (
    <>
      <Loader />
      <Menu/>
      <ToastContainer />
      <div className='h-100 row m-0'>
        <div className="vh-100 p-4 col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center aside-contact ">
          <div className="col col-12 col-md-9 d-flex flex-column">
            <h1 className="display-1 fw-bold text-light mb-3">{generateLetters("Contact", false)}</h1>
            <p className='lead text-light fs-5 mb-4'>
            I'm currently looking for freelance opportunities, if you have something in mind that I can help you with, please send me a message using the form,
          make sure there are no typos, or I won't be able to get in touch:)
            </p>
              <CustomButton isLink={true} className="fs-5 d-lg-none text-center" href="#form-section" text={'Go to the form'}/>
            <div className="row">
            </div>
          </div>
        </div>
        <div id='form-section' className="vh-100 col col-12 col-lg-6 p-4 pb-lg-0 d-flex justify-content-center flex-column overflow-scroll">
            <h1 className='text-light display-2 fw-bold mb-4 mt-4 mb-lg-0 p-0 ps-lg-5 pe-lg-5'>{generateLetters("Get in touch", false)}</h1>
          <form  className=' p-0 p-lg-5 ' ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-12 col-lg-6 mb-3 ">
                <CustomInput value={emailContent.user_name} type='text' name='user_name' placeholder='Name' autocomplete={'off'} handleInput={handleInput} />
              </div>
              <div className="col-12 col-lg-6 mb-3 ">
                <CustomInput value={emailContent.user_email} type='email' name='user_email' placeholder='Email' autocomplete={'off'} handleInput={handleInput} />
              </div>
            </div>
            <CustomInput className="mb-3 " value={emailContent.subject} type='text' name='subject' placeholder='Subject' handleInput={handleInput} />
            <CustomInput className="mb-3 " value={emailContent.message} isTextArea name='message' placeholder='Message' handleInput={handleInput} />

              <CustomButton className={'mb-3'} disabled={disableButton} text="Submit" />
          </form> 
        </div>

      </div>
    </>
  )
}


export default Contact