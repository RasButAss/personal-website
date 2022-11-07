import React from 'react'
import Nav from './Nav'
import BackgroundOther from './BackgroundOther'
import "./body.css"

const Contact = () => {
  return (
    <>
      <Nav />
      <div className='d-flex justify-content-center align-items-center card-content text-light' >
        <h1 style={{ fontSize: "5rem" }}><strong>Get in touch</strong></h1>
      </div>
      <div className='card-content text-light d-flex justify-content-center align-items-center mb-4' style={{ fontSize: "1.5rem" }}>
        <p>Feel free to reach out and text "hi". I will try to respond as soon as possible.</p>
      </div>
      <div className='card-content text-light d-flex justify-content-center align-items-center' style={{ fontSize: "1.5rem" }}>
      <a href='https://www.instagram.com/_.cat.junkie._/' className='text-light'><i class="fa-brands fa-instagram fa-2xl me-2 ms-2"></i></a>
      <a href='https://www.linkedin.com/in/samarth-tankasali-16a20a235/' className='text-light'><i class="fa-brands fa-linkedin fa-2xl me-2 ms-2"></i></a>
      <a href='https://github.com/RasButAss' className='text-light'><i class="fa-brands fa-github fa-2xl me-2 ms-2"></i></a>
      <a href='https://twitter.com/RandomKumar_III' className='text-light'><i class="fa-brands fa-twitter fa-2xl me-2 ms-2"></i></a>
      <a href='mailto:samarth3tankasali@gmail.com' className='text-light'><i class="fa-regular fa-envelope-open fa-2xl me-2 ms-2"></i></a>
      </div>

      <BackgroundOther />
    </>
  )
}

export default Contact