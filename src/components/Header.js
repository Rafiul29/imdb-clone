import React from 'react'
import Link from 'next/link'
import {AiFillHome,AiOutlineInfoCircle} from 'react-icons/ai'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='h-20 w-full '>
      <div className='wrapper h-full w-full flex justify-between items-center'>
         {/* left */}
         <div  className='flex items-center gap-3 '>
            <AiFillHome className='sm:hidden text-2xl cursor-pointer'/>
            <Link href="/" className='hidden sm:inline text-2xl cursor-pointer'>Home</Link>

            <AiOutlineInfoCircle className='sm:hidden text-2xl cursor-pointer'/>
            <Link href="/about" className='hidden sm:inline text-2xl cursor-pointer'>About</Link>
         </div>
         {/* Right */}
         <div className='flex items-center gap-3 '>
          <DarkModeSwitch/>
          <Link href="/" className='bg-amber-400 p-2 rounded-md font-semibold cursor-pointer'>IMDb</Link>
          <p className='hidden sm:inline'>Clone</p>
         </div>
      </div>
    </div>
  )
}

export default Header