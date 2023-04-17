import React from "react";
import Frame7 from "../image/Frame 7.png";
import Groupe from "../image/Group 1110.png";
import Arrow from "../image/v1.png";
import Frame from '../image/Frame.png'
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
      <div className="flex flex-col justify-center items-center max-sm:gap-4">
        <h1 className="want text-[28px] sm:text-[32px] font-normal  text-center text-[#21233B] mt-[30px] sm:mt-[76px]">
          Want to add your work?
        </h1>
        <button className="text-white bg-gradient-to-r from-indigo-600 to-purple-500  w-[147px] sm:w-[245px] rounded-[8px] h-[48px] sm:h-[64px] sm:mt-[24px]">
          <h1 className="text-[16px] sm:text-[24px] font-semibold font-sans">CONTACT US</h1>
        </button>
        <img src={vector} alt=" " className="mt-[30px] sm:mt-[35px] w-[80%] md:mt-[100px] " />
        {/* <img src={Frame7} alt="Frame7" className="mt-[45px] w-[320px] sm:w-[450px] md:w-[590px]" /> */}
        <p className="welcome max-sm:w-[300px] text-[40px] leading-[48px] mt-[20px] sm:mt-[30px] md:mt-[50px] sm:text-[48px] text-[#21233B] text-center " >Welcome to the <span className="text-[#7D75D8] ">wall of</span> </p>
        <img src={Frame} alt="" className="w-[310px]  sm:w-[475] -mt-3 sm:mt-3 mx-auto" />
        <p className=" font-normal mt-1 sm:mt-5  mb-[30px] sm:mb-[50px] text-[#303365] text-[24px] leading-[36px] sm:leading-[48px] items-center  sm:text-[32px] w-[305px] sm:w-[500px] mx-auto md:w-[718px] font-sans  text-center">
          This is where we tell you at all our  <span className="max-sm:hidden"> <br /> </span>
          hopes and aspirations. <br />
          Behold the wanderer of the literary metaverse.
        </p>
        <img src={vector} alt="-mt-2" />
      </div>

      <div className=" w-[90%] sm:w-[80%] flex flex-row max-lg:flex-col mx-auto justify-end items-center  mt-[170px] sm:mt-[252px] mb-[150px] sm:mb-[227px]   relative rounded-[16px] sm:rounded-[24px]  bg-[#7D75D8] ">
        <div className="absolute w-[full] lg:left-[100px] flex justify-center  max-lg:mx-auto top-[-12%] lg:top-[-30%]  items-center ">
          <img
            src={Groupe}
            alt="Groupe"
            className=" flex justify-center items-center w-[258px] h-[329px] sm:h-[468px] sm:w-[380px]"
          />
        </div>
        <div className=" w-[90%]  md:w-[80%] lg:w-[40%]  flex flex-col mt-[70%] md:mt-[65%] lg:mt-[1%] pt-[40px]   xl:pt-[60px] pb-[40px] xl:pb-[55px] lg:mr-[2%] xl:mr-[80px]">
          <h1 className="publish max-sm:w-[200px] text-[40px] sm:text-5xl text-white mb-2 sm:mb-5   " >
            Publish a book NFT
          </h1>
          <p className="text-white text-[20px] sm:text-2xl font-[400px] mb-4 sm:mb-5">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi
            ante blandit ligula, vel elementum urna velit eu lorem
          </p>
          <button className=" text-white flex justify-center items-center gap-3 px-6 py-3 mb-10 rounded-md text-[16px] sm:text-[20px] font-semibold whitespace-nowrap w-[220px] sm:w-[308px] h-[48px] sm:h-[58px]" style={{ background: "linear-gradient(90deg, #6B60EB 0%, #CE5FE6 100%)" }}>
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
          <p className="mt-[110px] sm:mt-[150px] mb-[40px] text-[32px] md:text-[40px] font-normal ">DISCOVER THE <span className="text-[#7D75D8]">BENEFITS</span> </p>
        </div>

        <div className=" sm:max-w-full  md:flex flex-wrap gap-[30px] md:gap-[48px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center max-xl:mx-5 mx-auto gap-[42px] mt-[40px] sm:mt-5">
            <div className="max-sm:w-[312px]  ">
              <img src={Frame13} alt="Frame13" />
            </div>
            <div className="max-sm:w-[312px]  ">
              <img src={Frame14} alt="Frame14" />
            </div>
            <div className="max-sm:w-[312px]  ">
              <img src={Frame15} alt="Frame15" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center mx-32 lg:mx-auto  gap-[42px] mt-[42px] mb-20 sm:mb-24">
            <div className="max-sm:w-[312px]  ">
              <img src={Frame16} alt="Frame16" />
            </div>
            <div className="max-sm:w-[312px]  ">
              <img src={Frame17} alt="frame17" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
