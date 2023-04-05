import React from 'react'
import Image2 from '../image/Group 1111.png'
import send from '../image/send.png'

function Hero() {
    return (
        <div className='flex-col-reverse w-[90%] mx-auto flex md:flex-row justify-between ' >
            <div className='flex flex-col'>
                <h1 className='Prata font-normal text-8xl text-white ml-8 mt-28'>Your books <br /> on-chain </h1>
                <p className=' text-3xl ml-8 mt-5 text-white font-sans'>The storefront you need to publish and <br /> sell books as NFTs</p>
                <div className='flex flex-col w-[95%] md:flex-row gap-5 md:w-fit mx-auto mt-9'>
                    <button className='px-8 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 flex gap-4 justify-center items-center rounded-lg'> <img src={send} alt="" /><h1>EXPLORE</h1></button>
                    <button className='rounded-lg  sm:px-8 py-2 bg-[#303365] lg:bg-white text-[#7D75D8] md:text-[#7D75D8] font-bold'>PUBLISH</button>



                </div>
            </div>
            <div className='w-[full]  flex justify-center items-center text-center'>




                <img src={Image2} alt="Image2" className='' />
            </div>

        </div>
    )
}

export default Hero
