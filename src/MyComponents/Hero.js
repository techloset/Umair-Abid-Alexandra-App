import React from 'react'
import Image2 from '../Image/Group 1111.png'

function Hero() {
    return (
        <div className='md:grid grid-cols-2' >
        <div className='flex flex-col'>
        <h1 className='Prata font-normal text-8xl text-white ml-8 mt-28'>Your books <br /> on-chain </h1>
            <p className=' text-3xl ml-8 mt-5 text-white font-sans'>The storefront you need to publish and <br /> sell books as NFTs</p>
            <div className='block flex-row mx-9 mt-9 justify-between'>
                <button className='px-8 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg'>EXPLORE</button>
                <button className='rounded-lg px-8 py-2 text-purple-600 bg-white mr-5'>PUBLISH</button>
            </div>
        </div>
          
            <img src={Image2} alt="" />


        </div>
    )
}

export default Hero
