import React from "react";
import Frame7 from "../image/Frame 7.png";
import Groupe from "../image/Group 1110.png";
import Arrow from "../image/v1.png";
import absolute from "../image/pen.png";
import Frame13 from "../image/Frame 13.png";
import Frame14 from "../image/Frame 14.png";
import Frame15 from "../image/Frame 15.png";
import Frame16 from "../image/Frame 16.png";
import Frame17 from "../image/Frame 17.png";
import vector from "../image/vector15.png";
function Bottom() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="want text-[24px] sm:text-[32px] font-normal  text-center text-[#21233B] mt-[49px] sm:mt-[76px]">
          Want to add your work?
        </h1>
        <button className="text-white bg-gradient-to-r from-indigo-600 to-purple-500  w-[147px] sm:w-[245px] rounded-[8px] h-[48px] sm:h-[64px] sm:mt-[24px]">
          <h1 className="text-[16px] sm:text-[24px] font-semibold font-sans">CONTACT US</h1>
        </button>
        <img src={vector} alt=" " className="mt-[51px] w-[80%] sm:mt-[112px]" />
        <img src={Frame7} alt="Frame7" className="mt-[56px] max-md:w-[95%]" />
        <p className="hopes font-normal mt-5 mb-[48px] sm:mb-[56px] text-[24px] sm:text-[32px] max-md:w-[88%]  text-center">
          This is where we tell you at all our <br />
          hopes and aspirations. <br />
          Behold the wanderer of the literary metaverse.
        </p>
        <img src={vector} alt="" />
      </div>

      <div className=" w-[90%] sm:w-[80%] flex flex-row max-lg:flex-col mx-auto justify-end items-center  mt-[170px] sm:mt-[252px] mb-[150px] sm:mb-[227px]   relative rounded-lg  bg-[#7D75D8] ">
        <div className=" absolute w-[full] lg:left-[100px] flex justify-center  max-lg:mx-auto top-[-12%] lg:top-[-30%]  items-center ">
          <img
            src={Groupe}
            alt="Groupe"
            className=" flex justify-center items-center max-sm:w-[80%]"
          />
        </div>
        <div className=" w-[90%]  md:w-[80%] lg:w-[40%]  flex flex-col mt-[70%] md:mt-[65%] lg:mt-[1%] pt-[20px]   xl:pt-[88px] pb-[40px] xl:pb-[95px] lg:mr-[2%] xl:mr-[80px]">
          <h1 className="publish text-[40px] sm:text-5xl text-white mb-5     " >
            Publish a book NFT
          </h1>
          <p className="text-white text-[20px] sm:text-2xl font-[400px] mb-5">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi
            ante blandit ligula, vel elementum urna velit eu lorem
          </p>
          <button className=" text-white flex justify-center items-center gap-3 px-6 py-3 mb-5 rounded-md text-[16px] sm:text-[20px] font-semibold whitespace-nowrap w-[220px] sm:w-[308px] h-[48px] sm:h-[58px]" style={{background: "linear-gradient(90deg, #6B60EB 0%, #CE5FE6 100%)"}}>
          PUBLISH WORKS  <img src={Arrow} alt="Arrow" className="pl-5   " />
          </button>
        </div>
      </div>
      <div className=" h-auto mb-10  pb-5 bg-[#F1F0F9] mt-[50px] w-[100%] mx-auto relative ">
        <img
          src={absolute}
          alt="Absolute"
          className="absolute -mt-20 sm:-mt-36  right-0 sm:right-7 max-sm:w-[60%]" 
        />
       
       <div className="discover  flex justify-center items-center mx-5">
        <p className="mt-[140px] sm:mt-[162px] mb-[72px] text-[32px] md:text-[40px] font-normal ">DISCOVER THE <span className="text-[#7D75D8]">BENEFITS</span> </p>
       </div>
      
        <div className=" sm:max-w-full  md:flex flex-wrap  mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center max-xl:mx-5 mx-auto gap-[42px] sm:mt-5">
            <div className="max-sm:w-[308px] ">
              <img src={Frame13} alt="Frame13" />
            </div>
            <div className="max-sm:w-[308px] ">
              <img src={Frame14} alt="Frame14" />
            </div>
            <div className="max-sm:w-[308px] ">
              <img src={Frame15} alt="Frame15" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center max-md:mx-5 mx-auto gap-[42px] mt-[42px] mb-36">
          <div className="max-sm:w-[308px] ">
              <img src={Frame16} alt="Frame16" />
            </div>
            <div className="max-sm:w-[308px] ">
              <img src={Frame17} alt="frame17" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
