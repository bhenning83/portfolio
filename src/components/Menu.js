import React, {useState} from 'react';
import Hamburger from './Hamburger';
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'

function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = (idx, delay='0.2s') => {
    const nav = document.getElementById('navbar');
    const dot = document.getElementById('nav-dot');
    const burger = document.querySelector('.burger');
    if (open === true) {
      nav.style.animation = `slideOut 0.5s ${delay}`
      nav.style.animationFillMode = 'backwards'
      burger.style.backgroundColor = '#dedede'
    } else {
      nav.style.animation = `slideIn 0.5s ${delay}`
      nav.style.animationFillMode = 'forwards'
      burger.style.backgroundColor = '#f5f5f5'
    }
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

  const handleScroll = (e) => {
    const dot = document.getElementById('nav-dot');
    switch (e.id) {
      case 'home': 
      dot.style.top = '70px';
      break;
      case 'work': 
        const workLines = document.querySelectorAll('.line-work');
        dot.style.top = '167px';
        workLines.forEach(line => line.style.width = '80px')
        break;
      case 'about':
        const aboutLines = document.querySelectorAll('.line-about');
        aboutLines.forEach(line => line.style.width = '80px')
        dot.style.top = '265px';
        break;
      case 'contact': 
        const contactLines = document.querySelectorAll('.line-contact');
        const touches = document.querySelectorAll('.touch > h1');
        const phones = document.querySelectorAll('.phone');
        const emails = document.querySelectorAll('.email');
        const bar = document.querySelector('.bar')
        contactLines.forEach(line => line.style.width = '80px');
        touches.forEach(touch => touch.style.marginRight = '0');
        phones.forEach(phone => phone.style.marginLeft = '0');
        emails.forEach(email => email.style.marginLeft = '0');
        bar.style.height = '100%'
        dot.style.top = '365px'
        break;
      default:
        break;
    } 
  }
  return (
    <div>
      <Hamburger open={open} handleClick={handleClick} /> 
      <div className='menu' id='navbar'>
        <div className='position-relative'>
          <div id='nav-dot'></div>
          <Scrollspy items={['home', 'work', 'about', 'contact']} offset={-200} onUpdate={handleScroll}>
            <li className>
              <Link activeClass='active' to='home' smooth={true} onClick={() => handleClick(0)}>
                Home
              </Link>
            </li>
            <li className>
              <Link activeClass='active' to='work' smooth={true} onClick={() => handleClick(1)}>
                Work
              </Link>
            </li>
            <li className>
              <Link activeClass='active' to='about' smooth={true} onClick={() => handleClick(2)}>
                Bio
              </Link>
            </li>
            <li className>
              <Link activeClass='active' to='contact' smooth={true} onClick={() => handleClick(3)}>
                Contact
              </Link>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  )
}

export default Menu;