import React from 'react'
import Selfie from '../assets/websitePhoto.png'
import '../styles/Resume.css'

function Resume() {
  return (
    <div className='resume'>
        <div className='headerContainerLeft'>
          <h1>Indy Morrell</h1>
          <img src={Selfie}/>
          <p>Software Engineer</p>
        </div>
        <div className='headerContainerRight'>
          <p className='introParagraph'>
            Here is my resume
          </p>
        </div>
    </div>
  )
}

export default Resume