import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
         
          <img src={Logo} className=' w-[120px] ' />
          
          <div>
            <button className='btn btn-sm'>Work with me</button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
