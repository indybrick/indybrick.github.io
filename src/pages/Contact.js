import React from 'react'
import Selfie from '../assets/websitePhoto.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='headerContainerLeft'>
          <h1>Indy Morrell</h1>
          <img src={Selfie}/>
          <p>Software Engineer</p>
        </div>
        <div className='headerContainerRight'>
          <p className='introParagraph'>
            Here is my contact info
          </p>
        </div>
    </div>
  )
}

export default Contact