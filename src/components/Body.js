import React from 'react'
import Typed from 'typed.js'
import './body.css'

const Body = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                // '<strong>Developer</strong>',
                // '<strong>Finance</strong>',
                // '<strong>Electronics</strong>',
                // '<strong>Quant</strong>',
                // '<strong>Machine Learning</strong>'
                ' ^1000 <strong>Hey Stalker ;)</strong>',
            ],
            typeSpeed: 50,
            loop: false,
            cursorChar: '_'
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <>
        <div className='body text-light '>    
            <div className="noselect">
                <h1 className="noselect"><span style={{ whiteSpace: 'pre' }} ref={el} className="noselect" /></h1>
            </div>
        </div>
        </>
    )
}

export default Body