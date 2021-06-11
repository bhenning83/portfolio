import React, {useEffect} from 'react'
import delay from './delay'

function Home() {

  const runAnimation = async () => {
    await delay(500)
    document.getElementById('title1').style.top = '0'
    document.querySelector('.title-bar').style.height = '7rem'
    await delay(670)
    document.getElementById('title2').style.top = '2.3rem'
    await delay(670);
    document.getElementById('title3').style.top = '4.7rem'
  }

  useEffect(() => {
    runAnimation()
  })

  return (
    <div className='section home row'>
      <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <div className='prof-pic-box'>
          <div id='prof-pic'></div>
        </div>
      </div>
      <div className='col-12 col-lg-6 home-title'>
        <div className='title-box'>
          <h1 id='title1'>Hey.</h1>
          <h1 id='title2'>I'm Brendon.</h1>
          <h1 id='title3'>But you can call me hired.</h1>
        </div>
        <div className='title-bar-box d-flex'>
          <div className='title-bar align-self-start'></div>
        </div>
      </div>
    </div>
  )
}

export default Home;