import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Menu() {

  return (
    <div>
      <div className='menu' id='navbar'>
        <ul>
          <li>
            <Link activeClass='active' to='home' smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link activeClass='active' to='work' smooth={true}>
              Work
            </Link>
          </li>
          <li>
            <Link activeClass='active' to='about' smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link activeClass='active' to='contact' smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;