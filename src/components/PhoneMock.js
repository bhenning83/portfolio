import React from 'react';

function PhoneMock(props) {
  const {project} = props
  
  if (project.getTitle() === 'Apathetic Facebook'
  || project.getTitle() === 'To-Do List'
  || project.getTitle() === 'Newsweek'
  || project.getTitle() === 'TNW Magazine'
  || project.getTitle() === 'Shopping Cart') {
    return (
      <img src={project.getPhoneMock()} alt="Mockup on mobile device" className='phone-mock'/>
    )
  } else {
    return null
  }
}

export default PhoneMock