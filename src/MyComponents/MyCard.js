import Image1 from "../image/card1.png";
import Image2 from "../image/card2.png";
import Image3 from "../image/card3.png";
import Arrow1 from "../image/Arrow 1.png";
import Arrow2 from "../image/Arrow 2.png";
import Frame35 from "../image/Frame35.png";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export default function SimpleSlider() {
  const slide = useRef(null);
  const settings = {
    dots: false,
    autoplay: true,
        autoplaySpeed: 3000,
    speed: 1000,
    autoplay: true,
    infinite: true,
    

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 1000,
        
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 1000,
        
          // initialSlide: 2,s
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
          

        },
      },
    ],
  };
  return (
    <div className="relative">
      <div className=" mt-[120px] sm:mt-[150px] md:mt-[150px] lg:mt-[120px] ">

        <div className="w-[100%] sm:w-[90%] mx-auto sm:px-10 ">

          <Slider ref={slide} {...settings}>
            <div className=" px-5">
              <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5  max-sm:mx-[6%]  flex justify-center flex-col items-center ">
                <img src={Image1} alt="Image1" className="max-sm:w-[280px] max-sm:h-[300px]" />
                <div className="sm:hidden flex-col justify-center text-white text-[14px] flex  ">
                  <p>The War of The Worlds</p>
                  <p>H.G. Wells | Collector`s Edition</p>
                  <img src={Frame35} alt="" />
                </div>
              </div>
            </div>
            <div className=" px-5">
              <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5 max-sm:mx-[6%]  flex justify-center flex-col items-center ">
                <img src={Image2} alt="Image1" className="max-sm:w-[280px] max-sm:h-[300px]" />
                <div className="sm:hidden flex-col justify-center text-white text-[14px] flex  ">
                  <p>The War of The Worlds</p>
                  <p>H.G. Wells | Collector`s Edition</p>
                  <img src={Frame35} alt="" />
                </div>
              </div>
            </div>
            <div className=" px-5">
              <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5 max-sm:mx-[6%]  flex justify-center flex-col items-center ">
                <img src={Image3} alt="Image1" className="max-sm:w-[280px] max-sm:h-[300px]" />
                <div className="sm:hidden flex-col justify-center text-white text-[14px] flex  ">
                  <p>The War of The Worlds</p>
                  <p>H.G. Wells | Collector`s Edition</p>
                  <img src={Frame35} alt="" />
                </div>
              </div>
            </div>
            <div className=" px-5">
              <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5 max-sm:mx-[6%]  flex justify-center flex-col items-center ">
                <img src={Image1} alt="Image1" className="max-sm:w-[280px] max-sm:h-[300px]" />
                <div className="sm:hidden flex-col justify-center text-white text-[14px] flex  ">
                  <p>The War of The Worlds</p>
                  <p>H.G. Wells | Collector`s Edition</p>
                  <img src={Frame35} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col  center">
        <div className="flex justify-center  items-center">
          <p className="work absolute top-[-30%] md:top-[-25%] lg:top-[-20%] flex justify-center items-center left-[10%] lg:left-[9%] max-md:right-[20%] max-md:left-[20%] whitespace-nowrap text-[30px]  sm:text-[40px] text-[#21233B] ">
            FEATURED <span className="text-[#7D75D8] pl-3"> WORKS</span>
          </p>
        </div>
        <div className="absolute max-md:mt-5 top-[-20%] sm:top-[-20%] md:top-[-20%] lg:top-[-15%] flex justify-center items-center right-[9%] max-md:right-[20%] max-md:left-[20%] ">
          <button onClick={() => slide?.current?.slickPrev()} className="mx-3">
            <img src={Arrow2} alt="Arrow2" />
          </button>
          <button onClick={() => slide?.current?.slickNext()} className="mx-3">
            <img src={Arrow1} alt="Arrow1" />
          </button>
        </div>

      </div>
    </div>
  );
}
