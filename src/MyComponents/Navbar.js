
import Frame1 from '../Image/Frame 00.png'
import { CgMenuBoxed, CgClose } from 'react-icons/cg'
import { useState } from 'react'

// const Navbar = () => {
//   const [nav, setNav] = useState(false)
//   const handleNav =()=>{
//     setNav(!nav)
//   }
//   return (
//     <div className='flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]'>
//       <img src={Frame1} alt="" className='' />
//       <ul className='flex hidden'>
//         <li className='p-4'>About</li>
//         <li className='p-4'>Authors</li>
//         <li className='p-4'>Team  </li>
//       </ul>
//       <div onClick={handleNav}>
//       {!nav ? <CgClose size={20}/> : <CgMenuBoxed size={20}/>}

//       </div>
//       <div className='left-0 top-0 fixed w-[60%] h-full border-r border-r-gray-100 '>
//         <ul className='pt-24 p-4'>
//           <li className='p-4 border-b border-gray-50'>About</li>
//           <li className='p-4 border-b border-gray-50'>Authors</li>
//           <li className='p-4 border-b border-gray-50'>Team  </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Na

import React from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=''>
      <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[6%] flex-wrap w-full'>
        <img src={Frame1} alt=""  className='px-5 mt-10 w-[100%] max-w-[220px]' />
        <div className='md:hidden block'>
          <CgMenuBoxed className='h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
        </div>

        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav className={ ` w-full flex items-center justify-center md:justify-end md:w-auto`}>



          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul className={`text-base text-gray-600 flex-col  ${open ?  'block':"hidden" } md:flex md:flex-row md:justify-between md:items-center `}>
            <li className='md:px-5 py-2 block text-white font-semibold'>About</li>
            <li className='md:px-5 py-2 block text-white font-semibold'>Autors</li>
            <li className='md:px-5 py-2 block text-white font-semibold'>Team</li>
            <li className='md:px-5 py-2 block bg-white text- rounded-xl'>CONNENCT TEAM</li>
          </ul>

        </nav>
      </div>

    </header>
  )
}

export default Navbar












