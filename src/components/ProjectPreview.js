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
        <h1 className='project-title'>{project.getTitle()}</h1>
      </div>
    </div>
  )
}

export default ProjectPreview;
