import React, {useState} from 'react';
import Hamburger from './Hamburger';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = (idx, delay='0.2s') => {
    const nav = document.getElementById('navbar');
    const dot = document.getElementById('nav-dot')
    nav.style.animation = open === false ? `slideIn 0.5s ${delay}` : `slideOut 0.5s ${delay}`;
    nav.style.animationFillMode = open === false ? 'forwards' : 'backwards';
    switch (idx) {
      case 0: 
        dot.style.top = '70px';
        break;
      case 1: 
        dot.style.top = '167px';
        break;
      case 2:
        dot.style.top = '265px';
        break;
      case 3: 
        dot.style.top = '365px'
        break;
      default:
        break;
    } 
    setOpen(open => !open)
  }

  return (
    <div>
      <Hamburger open={open} handleClick={handleClick} /> 
      <div className='menu' id='navbar'>
        <div className='position-relative'>
          <div id='nav-dot'></div>
          <ul>
            <li>
              <Link activeClass='active' to='home' smooth={true} onClick={() => handleClick(0)}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='work' smooth={true} onClick={() => handleClick(1)}>
                Work
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='about' smooth={true} onClick={() => handleClick(2)}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='contact' smooth={true} onClick={() => handleClick(3)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu;