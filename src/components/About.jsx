import React from 'react'
import BackgroundOther from './BackgroundOther'
import Nav from './Nav'
import Typed from 'typed.js'
import './body.css'
import Me from './images/me.png'

const About = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: [
        '<strong>Developer</strong>^1000',
        '<strong>Finance</strong>^1000',
        '<strong>Electronics</strong>^1000',
        '<strong>Quant</strong>^1000',
        '<strong>Machine Learning</strong>^1000'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])
  return (
    <>
      <Nav />
      <div className='me'>
        <img src={Me} alt='ME' height="300" width="300" />
      </div>
      <div className="noselect text-light" id='about-heading'>
        <span style={{ whiteSpace: 'pre' }} ref={el} className="noselect" />
      </div>
      <div>
        <p className='content text-light'>
        Hello, I'm Samarth Tankasali, a sophomore at IIT (BHU) Varanasi majoring in Electronics Engineering. I am passionate about software development, machine learning, finance, electronics and quant. In my free time you would see me jamming to music, sleeping, or walking across campus like a zombie. I love traveling, going out on treks, and exploring the strangest of places this world has to offer.
        </p>
      </div>
      <BackgroundOther />
    </>
  )
}

export default About