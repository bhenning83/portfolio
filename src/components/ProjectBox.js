import React from 'react';

function ProjectBox(props) {
  const {project, handleClick} = props

  return(
    <div className='project-box d-flex mb-3 mb-lg-4'>
      <img 
        className='project-thumb' 
        src={project.getThumb()} 
        alt="Screenshot of Where's Waldo project"
        onClick={() => handleClick(project)}
      ></img>
      <div>
        <h3 className='project-title' onClick={() => handleClick(project)}>{project.getTitle()}</h3>
        <div className='d-flex'>
          <a className='project-links mr-3' href={project.getSource()} target='_blank' rel='noopener noreferrer'>Source Code</a>
          <a className='project-links' href={project.getLive()} target='_blank' rel='noopener noreferrer'>Live Preview</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox;