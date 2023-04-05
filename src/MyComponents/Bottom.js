import React from "react";
import Frame7 from "../image/Frame 7.png";
import Groupe from "../image/Group 1110.png";
import Arrow from "../image/Arrow 1.png";
import absolute from "../image/pen.png";
import discover from "../image/DISCOVER.png";
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
        <h1 className="want text-3xl text-center mt-20">
          Want to add your work?
        </h1>
        <button className="text-white bg-gradient-to-r from-indigo-600 to-purple-500 rounded-md px-5 py-3">
          CONTACT US
        </button>
        <img src={vector} alt="" />
        <img src={Frame7} alt="Frame7" className="mt-5" />
        <p className="hopes text-3xl mt-5 mb-5 text-center">
          This is where we tell you at all our <br />
          hopes and aspirations. <br />
          Behold the wanderer of the literary metaverse.
        </p>
        <img src={vector} alt="" />
      </div>

      <div className=" w-[90%] flex flex-row max-lg:flex-col mx-auto justify-end items-center  mt-[252px] mb-[227px]   relative rounded-lg  bg-[#7D75D8] ">
        <div className=" absolute w-[full] lg:left-[100px] flex justify-center  max-lg:mx-auto top-[-12%] lg:top-[-30%]  items-center ">
          <img
            src={Groupe}
            alt="Groupe"
            className=" flex justify-center items-center max-sm:w-[80%]"
          />
        </div>
        <div className="   w-[80%] lg:w-[40%]  flex flex-col mt-[70%] sm:mt-[55%] lg:mt-[1%]   pt-[88px]  pb-[95px] lg:pr-[105px]">
          <h1 className="publish text-5xl text-white mb-5    ">
            Publish a book NFT
          </h1>
          <p className="text-white text-2xl font-[400px] mb-5">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi
            ante blandit ligula, vel elementum urna velit eu lorem
          </p>
          <button className="bg-gradient-to-r flex from-indigo-600 to-purple-700 text-white px-6 py-3 mb-5 rounded-md w-fit">
            Publish Works <img src={Arrow} alt="Arrow" className="pl-5 " />
          </button>
        </div>
      </div>
      <div className=" h-auto mb-10  pb-5 bg-[#F1F0F9] mt-[50px] w-[100%] mx-auto relative ">
        <img
          src={absolute}
          alt="Absolute"
          className="absolute -mt-36  right-0 sm:right-7"
        />
       
       <div className="discover  flex justify-center items-center mx-5">
        <p className="mt-[162px] mb-[72px] text-[40px] font-normal ">DISCOVER THE <span className="text-[#7D75D8]">BENEFITS</span> </p>
       </div>
      
        <div className=" sm:max-w-full  md:flex flex-wrap  mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center max-xl:mx-5 mx-auto gap-[42px] mt-5">
            <div className="">
              <img src={Frame13} alt="Frame13" />
            </div>
            <div className="">
              <img src={Frame14} alt="Frame14" />
            </div>
            <div className="">
              <img src={Frame15} alt="Frame15" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center max-md:mx-5 mx-auto gap-[42px] mt-[42px] mb-36">
            <div className="">
              <img src={Frame16} alt="Frame16" />
            </div>
            <div className="">
              <img src={Frame17} alt="frame17" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
