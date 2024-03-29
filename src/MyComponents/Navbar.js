import Frame1 from "../image/Frame 00.png";

import menu from '../image/Group1010.png'
import { useState } from "react";
import React from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="">

      <div className="flex items-center justify-between pt-6 sm:pt-10  ml-4 mx-1 sm:mx-[10px] lg:mx-[96px]  max-md:flex-wrap ">
        <img src={Frame1} alt="" className="  max-sm:w-[40%] " />
        <div className="md:hidden  flex gap-2 sm:gap-5  mr-2">

          <button className="text-[12px] font-bold text-[#7D75D8] w-[124px] h-[38px] rounded-[4px] bg-white">SELECT WALLET</button>
          <img src={menu}
            className=" cursor-pointer w-[19px] h-[18px] mt-3"
            onClick={() => setOpen(!open)}
          />
        </div>


        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav
          className={` w-full flex items-center justify-left md:justify-end md:w-auto`}
        >

          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul
            className={`text-base text-gray-600 flex-col ${open ? "block" : "hidden"
              } md:flex md:flex-row md:justify-between md:items-center `}
          >
            <div className="flex flex-col md:flex-row justify-center items-center max-sm:mt-5 gap-5 lg:gap-10">


              <li className="text-white text-[20px] font-semibold">About</li>
              <li className="text-white text-[20px] font-semibold ">Autors</li>
              <li className="text-white text-[20px] font-semibold">Team</li>
              <li className="text-[#7D75D8] px-7 py-4 text-[16px] max-md:hidden rounded-[8px] font-bold whitespace-nowrap bg-white">CONNECT WALLET</li>

            </div>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Navbar