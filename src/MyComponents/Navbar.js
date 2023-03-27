
import Frame1 from '../image/Frame 00.png'
import { CgMenuBoxed} from 'react-icons/cg'
import { useState } from 'react'
import React from 'react'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=''>
      <div className='flex items-center justify-center gap-[25%] sm:gap-[50%] md:gap-[10%] lg:gap-[30%] w-[100%]  mx-auto  max-md:flex-wrap '>
        <img src={Frame1} alt="Frame" className='mt-8  md:mt-10 w-[200px] md:w-[294px] ' />
        <div className='md:hidden block mt-10 mr-2'>
          <CgMenuBoxed className='h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
        </div>

        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav className={` w-full flex items-center justify-left md:justify-end md:w-auto`}>



          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul className={`text-base text-gray-600 flex-col mt-[20px] ${open ? 'block' : "hidden"} md:flex mt-[40px] md:flex-row md:justify-between md:items-center `}>
            <li className='md:px-5 py-2 block text-white font-semibold'>About</li>
            <li className='md:px-5 py-2 block text-white font-semibold'>Autors</li>
            <li className='md:px-5 py-2 block text-white font-semibold'>Team</li>
            <li className='px-3 md:px-5 py-1 md:py-2 block bg-white text- rounded-xl'>CONNECT TEAM</li>
          </ul>

        </nav>
      </div>

    </header>
  )
}

export default Navbar












