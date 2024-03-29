import React from 'react'
import Selfie from '../assets/websitePhoto.png'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
        <div className='headerContainerLeft'>
          <h1>Indy Morrell</h1>
          <img src={Selfie}/>
          <p>Software Engineer</p>
        </div>
        <div className='headerContainerRight'>
          <p className='introParagraph'>
            Here are my projects
          </p>
        </div>
    </div>
  )
}

export default Projects