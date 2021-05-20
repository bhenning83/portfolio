import React, {useState, useEffect} from 'react';
import { HamburgerButton } from 'react-hamburger-button';

function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const nav = document.getElementById('navbar')
    nav.style.marginRight = open === true ? '-150px' : '0px'
    setOpen(open => !open)
  }

  return (
    <div className='burger'>
      <HamburgerButton
	      open={open}
	      onClick={handleClick}
	      width={45}
	      height={25}
	      strokeWidth={2}
	      animationDuration={0.5}
/>
    </div>
  )
}

export default Hamburger