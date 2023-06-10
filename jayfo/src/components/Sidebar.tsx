import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex justify-center bg-gray-500 p-2 shadow-lg'>
          <ul className='flex space-x-4 '>
            <li><Link className='p-2 text-lg font-semibold text-white hover:bg-white hover:text-gray-500' href='/phones'>Furniture</Link></li>
            <li><Link className='p-2 text-lg font-semibold text-white hover:bg-white hover:text-gray-500' href='/fashion'>Electronics</Link></li>
            <li><Link className='p-2 text-lg font-semibold text-white hover:bg-white hover:text-gray-500' href='/shipping'>Kitchen</Link></li>
            <li><Link className='p-2 text-lg font-semibold text-white hover:bg-white hover:text-gray-500' href='/shipping'>Curtains and Beddings</Link></li>
          </ul>    
    </div>
  )
}

export default Sidebar