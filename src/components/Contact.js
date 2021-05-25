import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className='section row contact'>
       <div className='section-title col-12 text-center d-flex justify-content-center align-items-center'>
        <div className='line-contact'></div>
        <h1 className='mx-1 mx-sm-2 mx-lg-3'>Contact</h1>
        <div className='line-contact'></div>
      </div>
      <div className='col-12 mx-auto contact-info-container d-flex justify-content-center'>
        <div className='row w-100 test'>
          <div className='col-5 touch'>
            <h1>Let's</h1>
            <h1>Get</h1>
            <h1>In</h1>
            <h1>Touch</h1>
          </div>
          <div className='col-2 d-flex justify-content-center'>
            <div className='bar'></div>
          </div>
          <div className='col-5 contact-info-box'>
            <a href="tel:4023107243">
              <p className='phone'>402</p>
              <p className='phone'>310</p>
              <p className='phone'>7243</p>
            </a>
            <a href="mailto:contact-infobrendonhenning@gmail.com" className='mt-3'>
              <p className='email'>brendon</p>
              <p className='email'>henning</p>
              <p className='email'>@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact