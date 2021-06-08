import React from 'react'
import flipThrough from './flipThrough.js'

function About() {
  return (
    <div className='section row about mt-5 d-flex justify-content-center'>
       <div className='section-title col-12 text-center d-flex justify-content-center align-items-center'>
        <div className='line-about'></div>
        <h1 className='mx-1 mx-sm-2 mx-lg-3'>Bio</h1>
        <div className='line-about'></div>
      </div>
      <div className='col-12 col-lg-5 my-4 my-lg-0'>
        <div className='mx-auto position-relative' id='about-pic-box' onClick={flipThrough}>
          <div className='about-pic' id='about-pic-1'></div>
          <div className='about-pic' id='about-pic-2'></div>
          <div className='about-pic' id='about-pic-3'></div>
          <div className='about-pic' id='about-pic-4'></div>
          <div id='photo-flash'></div>
        </div>
      </div>
      <div className='col-12 col-lg-5'>
        <h2 className='bio-heading'>A Little About How I Got Here</h2>
        <p className='mt-4'>In past lives I worked as a creative director, an outdoor guide, and even a farm hand. Being a creative director taught me how to approach problems from every possible angle until a solution presents itself. The guide life taught me that I need to be intellectually stimulated to find fulfillment in my work. And farming taught me that working in an air conditioned environment is severely underrated.</p>
        <p className='my-4'>At the start of the pandemic I discovered The Odin Project, an open-source curriculum written by developers that teaches (almost) everything one needs to be a capable full-stack developer. Projects range from some pretty serious hand holding in the beginning to "Go on kid. Make Facebook. You'll figure it out." I got hooked. Big time. </p>
        <p> I spent every day of the pandemic getting stuck until I figured out how to get unstuck. I made hundreds, if not thousands, of mistakes and learned from every one of them. Coding invigorates me in a way few things ever have. The logical part of my brain loves the process; the creative side of my brain loves the chaos.</p>
        <p className='mt-4'>If you need me, I'll be posted up in a coffee shop with an espresso and Topo Chico perusing Stack Overflow. Until then.</p>
      </div> 
    </div>
  )
}

export default About;