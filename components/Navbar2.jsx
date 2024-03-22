import React from 'react'
import { FaAngleDown } from "react-icons/fa";
export default function Navbar2() {
  return (
    <div className='bg-black text-black flex justify-between h-[60px] items-center px-[60px] py-[30px]'>
      <div className='text-[20px]'>
        <div className='bg-gray-300 px-3 py-2 rounded-md text-blue-500 font-cookie'>
          jabel
        </div>
      </div>
      <div className='font-poppins'>
        <div className=''>
          <ul className='flex justify-between items-center gap-6 text-gray-800'>
            <li>Home</li>
            <li className='flex items-center gap-1 capitalize'>
              Course 
              <span>
                <FaAngleDown size={20}/>
              </span>
            </li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div>
        input
      </div>
      <div className='flex justify-between gap-3'>
        <div className='font-poppins border-[1px] border-blue-500 rounded-md px-[20px] py-2 text-blue-500'>Login</div>
        <div className='font-poppins border-[1px] border-blue-500 rounded-md px-[30px] py-2 text-white bg-blue-500'>Sign Up</div>
      </div>
    </div>
  )
}
