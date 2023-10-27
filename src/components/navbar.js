import React from 'react'
import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const navref = useRef();
    const showitems = ()=>{
        navref.current.classList.toggle('responsive_nav');
    }
    return (
        <header>
            <h3>logo</h3>
            <nav ref={navref}>
                <a href='#'>Home</a>
                <a href='#'>Menu</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
                <button className='nav-btn close-nav-btn' onClick={showitems}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showitems} ><FaBars/></button>
        </header>
        
    )
}

export default Navbar

