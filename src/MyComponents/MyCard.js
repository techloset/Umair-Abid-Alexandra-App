
import Image1 from '../image/card1.png'
import Image2 from '../image/card2.png'
import Image3 from '../image/card3.png'
import Arrow1 from '../image/Arrow 1.png'
import Arrow2 from '../image/Arrow 2.png'
import Frame35 from '../image/Frame35.png'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
export default function SimpleSlider() {

  const slide = useRef(null);
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className='relative'>

      <div className=' mt-32 '>

        <div className=" w-[90%] mx-auto px-10 ">


          <Slider ref={slide} {...settings}>

            <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5  flex justify-center items-center"  >
              <img src={Image1} alt="Image1" />
              <div className='max-sm:flex flex-col justify-center text-white text-[14px]  hidden '>
                <p>The War of The Worlds</p>
                <p >H.G. Wells | Collector`s Edition</p>
                <img src={Frame35} alt="" />


              </div>
            </div>
            <div className="bg-[#7D75D8]  sm:bg-white shadow-md border rounded-[8px] p-5 backdrop-blur-lg flex justify-center items-center" style={{ boxShadow: '0px 32px 56px rgba(55, 64, 73, 0.11)' }} >

              <img src={Image2} alt="Image2" />
              <div className='max-sm:flex flex-col justify-center text-white text-[14px]  hidden '>
                <p>The War of The Worlds</p>
                <p >H.G. Wells | Collector`s Edition</p>
                <img src={Frame35} alt="" />


              </div>



            </div>
            <div className="bg-[#7D75D8]  sm:bg-white shadow-md border rounded-[8px] p-5 backdrop-blur-lg flex justify-center items-center" style={{ boxShadow: '0px 32px 56px rgba(55, 64, 73, 0.11)' }} >
              <img src={Image3} alt="Image3" />
              <div className='max-sm:flex flex-col justify-center text-white text-[14px]  hidden '>
                <p>The War of The Worlds</p>
                <p >H.G. Wells | Collector`s Edition</p>
                <img src={Frame35} alt="" />


              </div>
            </div>
            <div className="bg-[#7D75D8] shadow-md border rounded-[8px] p-5 backdrop-blur-lg flex justify-center items-center" style={{ boxShadow: '0px 32px 56px rgba(55, 64, 73, 0.11)' }} >
              <img src={Image1} alt="Iamge1" />
              <div className='max-sm:flex flex-col justify-center text-white text-[14px]  hidden '>
                <p>The War of The Worlds</p>
                <p >H.G. Wells | Collector`s Edition</p>
                <img src={Frame35} alt="" />


              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className='flex flex-col center'>
        <div className='flex justify-center items-center'>
          <p className='work absolute top-[-30%] md:top-[-25%] flex justify-center items-center left-[10%] max-md:right-[20%] max-md:left-[20%] whitespace-nowrap text-[30px]  sm:text-[40px] text-[#21233B] '>FEATURED <span className='text-[#7D75D8]'>  WORKS</span></p>
        </div>

        <div className='absolute top-[-10%] flex justify-center items-center right-[2%] max-md:right-[20%] max-md:left-[20%] '>


          <button onClick={() => slide?.current?.slickPrev()} className='mx-3'><img src={Arrow2} alt="Arrow2" /></button>
          <button onClick={() => slide?.current?.slickNext()} className='mx-3' ><img src={Arrow1} alt="Arrow1" /></button>

        </div>

      </div>

    </div>
  );
}
