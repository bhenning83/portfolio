import React from 'react'

function Contact() {
  return (
    <div className='section row contact safari-only'>
      <div className='col-12 mx-auto contact-info-container d-flex justify-content-center '>
        <div className='row w-100 d-flex justify-content-center'>
          <div className='col-5 touch'>
            <h1>Let's</h1>
            <h1>Get</h1>
            <h1>In</h1>
            <h1>Touch</h1>
          </div>
          <div className='col-2 d-flex justify-content-center bar-box'>
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
      <div className='col-12 d-flex justify-content-center'>
        <div className='align-self-end end-p-box'>
          <p>I'm always looking for ways to improve.</p>
          <p className='pt-2'> If you have a suggestion on how I could do that or would like to discuss a job/project opportunity, I'd love to chat.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact