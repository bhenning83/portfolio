import React, {useState} from 'react'
import ProjectBox from './ProjectBox'
import ProjectPreview from './ProjectPreview'

import projects from './projects'

function Work() {
  const [project, setProject] = useState(projects[0])
  
  const handleClick = (proj) => {
    setProject(proj)
  }

  return (
    <div className='section row work'>
      <h1 className='section-title col-12 text-center'>A Few Projects</h1>
      <div className='col-12 col-lg-4 cat'>
        <h2 className='cat-title'>Ruby</h2>
        {[projects[0], projects[1], projects[2]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick}/>
          )
        })}
      </div>
      <div className='col-12 col-lg-4 cat'>
        <h2 className='cat-title'>JavaScript</h2>
        {[projects[3], projects[4], projects[5], projects[6]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick} />
          )
        })}
      </div>
      <div className='col-12 col-lg-4 cat'>
        <h2 className='cat-title'>Responsive Design</h2>
        {[projects[7], projects[8]].map(proj => {
          return (
            <ProjectBox project={proj} handleClick={handleClick} />
          )
        })}
      </div>
      <ProjectPreview project={project} />
    </div>
  )
}

export default Work;