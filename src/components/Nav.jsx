import React, {useEffect} from 'react'
import Eye from './images/eye.png'
import "./body.css"

const Nav = () => {
    function angle(cx,cy,ex,ey){
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy,dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            // console.log(event);
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const anchor = document.getElementById('eyes');
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
            // console.log(angleDeg);
            const eyes = document.querySelectorAll('.eye')
            eyes.forEach(eye => {
                eye.style.transform = `rotate(${180+angleDeg}deg)`
            })
        })
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-dark opacity-100 navfont">
            <div className="container-fluid">
                <a className="navbar-brand ms-4 mt-3" href='/'>
                <div id='eyes'>
                <img src={Eye} width="70" height="70" className='eye' alt='You are being watched' />
                <img src={Eye} width="70" height="70" className='eye' alt='You are being watched' />
                </div></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3 ">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav