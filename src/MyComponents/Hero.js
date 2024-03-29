import React from 'react'
import Image2 from '../image/Group 1111.png'
import send from '../image/send.png'

function Hero() {
    return (
        <div className='flex-col-reverse w-[100%]  sm:w-[90%] mx-auto flex md:flex-row justify-between ' >
            <div className='flex flex-col w-[95%] mx-auto'>
                <h1 className='Prata font-normal text-[40px]  sm:text-[60px] lg:text-[90px] w-[250px] sm:w-[280px] lg:w-[500px] text-white ml-5 sm:ml-12 mt-7 md:mt-28'>Your books  on <span className='max-sm:hidden '>-</span> chain </h1>
                <p className=' text-[20px] max-sm:font-normal max-sm:leading-[30px] sm:text-3xl ml-5 sm:ml-12 mt-2 md:mt-5 w-[270px] sm:w-[350px] lg:w-[500px] text-white font-sans'>The storefront you need to publish and  sell books as NFTs</p>
                <div className='flex flex-col max-sm:mb-[80px]  md:flex-row gap-5 md:ml-[8%] mx-auto mt-9'>
                    <button className='px-8 h-[48px] max-sm:w-[310px] max-md:w-[500px] text-white  bg-gradient-to-r from-indigo-600 to-purple-500 flex gap-4 justify-center items-center rounded-lg'> <img src={send} alt="" /><h1>EXPLORE</h1></button>
                    <button className='rounded-lg  px-8 h-[48px]  max-sm:w-[310px] max-md:w-[500px] bg-[#303365] lg:bg-white text-[#7D75D8] md:text-[#7D75D8] font-bold'>PUBLISH</button>
                </div>
            </div>


            <div className='media flex justify-center items-center text-center   mx-auto w-[425px] sm:w-[550px] md:w-[575px] lg:w-[1200px]'>




                <img src={Image2} alt="Image2" className='lg:w-[1500px]' />
            </div>


        </div>
    )
}

export default Hero
