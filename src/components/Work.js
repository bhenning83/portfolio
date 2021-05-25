import React, {useState} from 'react'
import ProjectBox from './ProjectBox'
import ProjectPreview from './ProjectPreview'
import rubylogo from './assets/images/ruby.png'
import jslogo from './assets/images/js.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'

import projects from './projects'

function Work() {
  const [project, setProject] = useState(projects[0]);
  const [vis, setVis] = useState(false);
  
  const handleClick = (proj) => {
    setProject(proj);
    setVis(vis => !vis)
  }

  const closePreview = () => {
    setVis(vis => !vis)
  }

  return (
    <div className='section row work'>
      <h1 className='section-title col-12 text-center'>A Few Projects</h1>
      <div className='col-12 col-lg-4 cat'>
        <div className='d-flex align-items-center mx-auto'>
          <h2 className='cat-title mr-3'>Ruby</h2>
          <img src={rubylogo} alt='Ruby Logo' className='lang-logo'/>
        </div>
        {[projects[0], projects[1], projects[2]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick}/>
          )
        })}
      </div>
      <div className='col-12 col-lg-4 cat'>
        <div className='d-flex align-items-center mx-auto'>
          <h2 className='cat-title mr-3'>JavaScript</h2>
          <img src={jslogo} alt='JavaScript Logo' className='lang-logo'/>
        </div>  
        {[projects[3], projects[4], projects[5], projects[6]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick} />
          )
        })}
      </div>
      <div className='col-12 col-lg-4 cat'>
        <div className='d-flex align-items-center mx-auto'>
          <h2 className='cat-title mr-3'>Responsive Design</h2>
          <FontAwesomeIcon icon={faPencilRuler} id='pencilruler' size='2x' />
        </div>  
        {[projects[7], projects[8]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick} />
          )
        })}
      </div>
      <ProjectPreview project={project} vis={vis} closePreview={closePreview} />
    </div>
  )
}

export default Work;