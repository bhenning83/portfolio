import React from 'react';
import { HamburgerButton } from 'react-hamburger-button';

function Hamburger(props) {
  const {open, handleClick} = props;

  return (
    <div className='burger'>
      <HamburgerButton
	      open={open}
	      onClick={() => handleClick(false, '0s')}
	      width={45}
	      height={25}
	      strokeWidth={3}
	      animationDuration={0.5}
      />
    </div>
  )
}

export default Hamburger