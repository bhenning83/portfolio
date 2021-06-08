import React from 'react'

function Home() {
  return (
    <div className='section home row'>
      <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <div className='prof-pic-box'>
          <div id='prof-pic'></div>
        </div>
      </div>
      <div className='col-12 col-lg-6 home-title'>
        <div className='title-box'>
          <h1>Hey.</h1>
          <h1>I'm Brendon.</h1>
          <h1>But you can call me hired.</h1>
        </div>
        <div className='title-bar-box d-flex'>
          <div className='title-bar align-self-start'></div>
        </div>
      </div>
    </div>
  )
}

export default Home;