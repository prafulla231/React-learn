import React from 'react';
// import logo from './path-to-your-logo.png'; // make sure to replace this with the actual path to your logo

function Navbar() {
  return (
    <div className='bg-yellow-500 flex items-center justify-between px-4 py-2'>
      <div className='flex items-center space-x-4'>
        {/* <img src={logo} alt="Logo" className='h-10 w-10' /> */}
        <h2 className="text-2xl italic">WasteWipe</h2>
      </div>
      <ul className='flex space-x-20 text-2xl'>
        <li className='hover:underline cursor-pointer'>Home</li>
        <li className='hover:underline cursor-pointer'>Services</li>
        <li className='hover:underline cursor-pointer'>About us</li>
        <li className='hover:underline cursor-pointer'>Help</li>
      </ul>
      <div className='flex space-x-2'>
        <button className='border rounded-xl border-black px-2 py-1'>Log In</button>
        <button className='border rounded-xl border-black px-2 py-1'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
