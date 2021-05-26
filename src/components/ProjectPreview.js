import React, {useEffect} from 'react';

function ProjectPreview(props) {
  const {project, vis, closePreview} = props

  useEffect(() => {
    const box = document.getElementById('preview-container');
    box.style.display = vis === true ? 'block' : 'none'
  })

  return (
    <div className='col-12' id='preview-container'>
      <div className='preview-box d-flex align-items-center'>
        <button id='close-btn' onClick={closePreview}>X</button>
        <div className='mock-box'>
          <img src={project.getMock()} className='big-thumb' alt='project preview' />
          <img src={project.getPhoneMock()} className='phone-mock' alt='' />
        </div>
        <div>
          <h1 className='preview-title'>{project.getTitle()}</h1>
          <p className='my-4 project-desc'>{project.getDesc()}</p>
          <div>
            <a href={project.getLive()} className='project-links mr-4' target='_blank' rel='noopener noreferrer'>See It In Action</a>
            <a href={project.getSource()} className='project-links' target='_blank' rel='noopener noreferrer'>View Source Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview;
