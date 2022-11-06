import React from 'react'
import BackgroundOther from './BackgroundOther'
import Nav from './Nav'
import Typed from 'typed.js'
import './body.css'


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
      <div className="noselect text-light" id='about-heading'>
        <span style={{ whiteSpace: 'pre' }} ref={el} className="noselect" />
      </div>
      <div>
        <p className='content text-light'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <BackgroundOther />
    </>
  )
}

export default About