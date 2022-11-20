import React from 'react'
import Selfie from '../assets/websitePhoto.png'
import '../styles/Home.css'

function Home() {
    return ( <
        div className = 'home' >
        <
        div className = 'headerContainerLeft' >
        <
        h1 > Indy Brick Morrell < /h1> <
        img src = { Selfie }
        /> <
        p > Software Engineer < /p> < /
        div > <
        div className = 'headerContainerRight' >
        <
        p className = 'introParagraph' >
        Hello, world!Welcome to my online home.My name is Indy Morrell and I 've been a 
        professional software engineer
        for over three years.I graduated from the University of California, Santa Barbara in 2019 with a Bachelor 's in Mathematics and a minor in Philosophy.I joined Tyto Athene(formerly AT & T Government Solutions, Inc.) in July 2019 as a Specialist Software Design Engineer and Analyst, a junior developer role.I have since become a Senior Software Design Engineer specializing in network modeling and simulation at Tyto Athene.In this role, I use my domain expertise as well as my skills as a software engineer to develop new capabilities in a high - fidelity physics based modeling and simulation application.My technical skills are mainly focused on C++, though I am proficient with Python and HTML / CSS / JS, and somewhat familiar with C# and Java.In August 2022, I started my journey at the Georgia Institude of Technology to obtain a Master '
        s of Science in Computer Science through the OMSCS program. <
        /p> <
        p className = 'personalParagraph' >
        My personal philsophy is to balance a breadth and depth of knowledge.That is, I strive to maintain as diverse a knowledge base as I can; For those subjects which I learn about, I aim to have a foundational understanding of the topic, rather than a surface - level knowledge. <
        /p> < /
        div > <
        /div>
    )
}

export default Home