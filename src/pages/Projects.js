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
            Hello, world! Welcome to my site. My name is Indy Morrell and I've been a 
            professional software engineer for three years. I graduated from the 
            University of California, Santa Barbara in 2019 with a Bachelor's
            in Mathematics and a minor in Philosophy. I joined Tyto Athene(formerly
            AT&T Government Solutions, Inc.) in July 2019 as a Specialist Software
            Design Engineer and Analyst, a junior developer role. I have
            since grown into this position, now serving as a Senior Software Design
            Engineer specializing in network modeling and simulation. 
          </p>
          <p className='personalParagraph'>
            My personal philsophy is "Balance a breadth and depth of knowledge."
            That is, I strive to maintain as diverse a knowledge base as I can, and
            for those subjects which I learn, I aim to have a foundational understanding
            of the topic, rather than a surface-level knowledge. 
          </p>
        </div>
    </div>
  )
}

export default Projects