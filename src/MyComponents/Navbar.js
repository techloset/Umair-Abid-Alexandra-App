import Frame1 from "../image/Frame 00.png";
import { CgMenuBoxed } from "react-icons/cg";
import menu from '../image/Group1010.png'
import { useState } from "react";
import React from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  function dropDown() {
    setOpen(!open)
  }
  return (
    <header className="">

      <div className="flex items-center justify-between  mx-1 sm:mx-[10px] lg:mx-[96px]  max-md:flex-wrap ">
        <img src={Frame1} alt="" className="mt-8 md:mt-12 mb-[44px] max-sm:w-[50%] " />
        <div className="md:hidden  flex gap-2 sm:gap-5  mr-2">

         <button className="text-[12px] font-bold text-[#7D75D8] w-[100px] sm:w-[124px] h-[26px] sm:h-[38px] bg-white">SELECT WALLET</button>
          <img src={menu}
            className=" cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>


        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav
          className={` w-full flex items-center justify-left md:justify-end md:w-auto`}
        >

          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul
            className={`text-base text-gray-600 flex-col mt-[20px] ${open ? "block" : "hidden"
              } md:flex md:flex-row md:justify-between md:items-center `}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10"> 

          
           <li className="text-white text-[20px] font-semibold">About</li>
           <li className="text-white text-[20px] font-semibold ">Autors</li>
           <li className="text-white text-[20px] font-semibold">Team</li>
           <li className="text-[#7D75D8] px-7 py-4 text-[16px] max-md:hidden font-bold whitespace-nowrap bg-white">CONNECT WALLET</li>

           </div>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Navbar;