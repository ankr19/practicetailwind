import React from 'react'

export default function Navbar() {
  return (
      <div className=''>
    <div className='container w-full h-[60px] flex items-center text-white bg-black'>
        <ul className='flex justify-between items-center gap-3 text-[17px] p-3'>
          <li className='rounded-md px-3 py-2 cursor-pointer hover:bg-blue-500'>
            Home
          </li>
          <li className='rounded-md px-3 py-2 cursor-pointer hover:bg-blue-500'>
            About
          </li>
          <li className='rounded-md px-3 py-2 cursor-pointer hover:bg-blue-500'>
            Skills
          </li>
          <li className='rounded-md px-3 py-2 cursor-pointer hover:bg-blue-500'>
            Works
          </li>
          <li className='rounded-md px-3 py-2 cursor-pointer hover:bg-blue-500'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}
