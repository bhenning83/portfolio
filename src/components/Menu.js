import React, { useEffect } from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Work from './Work';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Menu() {

  return (
    <div>
      <ul id='navbar'>
        <li>
          <Link activeClass='active' to='home' smooth={true} offset={-50}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='work' smooth={true} offset={-50}>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='about' smooth={true} offset={-50}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='contact' smooth={true} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='work'>
        <Work />
      </Element>
      <Element name='about'>
        <About />
      </Element> 
      <Element name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default Menu;