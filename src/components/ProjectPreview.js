import React, {useEffect} from 'react'

function ProjectPreview(props) {
  const {project, vis, closePreview} = props

  useEffect(() => {
    const box = document.getElementById('preview-container');
    box.style.display = vis === true ? 'block' : 'none'
  })

  return (
    <div className='col-12' id='preview-container'>
      <div className='preview-box d-flex flex-column align-items-center'>
        <button id='close-btn' onClick={closePreview}>X</button>
        <img src={project.getThumb()} className='big-thumb' alt='project preview' />
        <h1 className='project-title mt-3'>{project.getTitle()}</h1>
        <p className='my-4 project-desc'>{project.getDesc()}</p>
        <div>
          <a href={project.getLive()} className='project-links mr-4' target='_blank' rel='noopener noreferrer'>See It In Action</a>
          <a href={project.getSource()} className='project-links' target='_blank' rel='noopener noreferrer'>View Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview;
