// import React, { Component } from "react";
// import Slider from "react-slick";
import Image1 from '../Image/image 6.png'
import Image2 from '../Image/image 7.png'
import Image3 from '../Image/image 8.png'
import Arrow1 from '../Image/Arrow 1.png'
import Arrow2 from '../Image/Arrow 2.png'

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

      <div className='md:flex justify-center mt-32 '>

        <div className=" md:w-[90%]  ">


          <Slider ref={slide} {...settings}>

            <div>
              <img src={Image1} alt="" />
            </div>
            <div>

              <img src={Image2} alt="" />
            </div>
            <div>
              <img src={Image3} alt="" />
            </div>
            <div>
              <img src={Image1} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div className='absolute top-[-10%] right-0'>

        <button onClick={() => slide?.current?.slickPrev()} className='mx-3'><img src={Arrow2} alt="" /></button>
        <button onClick={() => slide?.current?.slickNext()} className='mx-3' ><img src={Arrow1} alt="" /></button>
      </div>
    </div>
  );
}
