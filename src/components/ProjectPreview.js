import React, {useEffect} from 'react';
import PhoneMock from './PhoneMock'

function ProjectPreview(props) {
  const {project, vis, closePreview} = props

  useEffect(() => {
    const box = document.querySelector('.preview-container');
    box.style.display = vis === true ? 'block' : 'none'
  })

  const setId = () => {
    return project.getTitle() === 'Chess' ? 'chess-preview' : ''
  }


  return (
    <div className='col-12 preview-container' id={setId()}>
      <div className='preview-box d-flex align-items-center'>
        <button id='close-btn' onClick={closePreview}>X</button>
        <div className='mock-box'>
          <img src={project.getMock()} className='big-thumb' alt='project preview' />
          <PhoneMock project={project} />
        </div>
        <div className='preview-content'>
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
