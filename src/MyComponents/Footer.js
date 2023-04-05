import React from 'react'
import Group from '../image/Group 2.png'
import Alexandra from '../image/alexandria.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center lg:w-[532px]  mx-auto mt-[109px] mb-[155px]'>
                <div>
                    <img src={Group} alt="Group" className='flex justify-center items-center' />
                    <p className='subscribe text-center text-[#21233B] text-[48px] font-[400px]'>SUBSCRIBE</p>
                    <p className='text-[#303365] font-sans text-[20px] text-center mx-2 font-[400px]'>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
                </div>
                <div className='mt-8 px-[10px]  flex justify-center items-center'>
                    <input type="text" placeholder='Enter Your Email Address' className='placeholder:text-[16px] font-normal px-[10px] md:px-[30px]  border rounded-md w-[200px] md:w-[393px] h-[52px]' />
                    <button className='bg-[#7D75D8]  w-[100px] md:w-[139px] h-[52px] text-white  rounded-md '>Send</button>
                </div>
            </div>
            <div className='w-[100%] mx-auto bg-[#1f2937] flex flex-col  sm:flex-row  justify-between px-[2%] sm:px-[10%]'>
                <div>
                    <div
                     className='flex flex-col justify-center pt-[75px] pb-[88px] relative'>
                        <div className='flex justify-center items-center'>
                        <img src={Alexandra} alt="Alexandra" className='w-[294px] ' />
                        </div>
                        

                        <div className='hidden sm:block mt-10'>
                            <p className='text-[14px] font-normal  text-[#F6F6F6] opacity-[70%] '> © 2022 Alexandria Labs. All Right Reserved</p>
                        </div>

                        <div className='max-sm:flex   hidden justify-center items-center gap-10 mt-5 '>
                            <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'><AiOutlineTwitter /></h1>
                            <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'><FaDiscord /></h1>

                        </div>
                        <div className=' max-sm:flex   hidden  justify-between  px-[5%] mt-5'>
                            <div className='flex flex-col gap-5' >
                                <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans'>About</h1>
                                <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans'>Early Access</h1>
                            </div>
                            <div className='max-sm:flex   hidden  flex-col gap-5 '>
                                <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans '>Authors Submission</h1>
                                <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans '>Team</h1>

                            </div>
                        </div>
                        <div className='max-sm:flex   hidden justify-center items-center absolute bottom-3 left-[7%] right-[7%] gap-10 mt-5   '>
                            <p className='text-[14px] font-normal  text-[#F6F6F6] opacity-[70%] '> © 2022 Alexandria Labs. All Right Reserved</p>
                        </div>



                    </div>
                </div>

                <div className='flex  justify-start items-center  md:gap-20 lg:gap-24 xl:gap-32'>


                    <div className='sm:flex flex-col gap-5 hidden' >
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans'>About</h1>
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans'>Early Access</h1>
                    </div>
                    <div className='md:flex flex-col gap-5  hidden'>
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans '>Authors Submission</h1>
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans '>Team</h1>
                    </div>
                    <div className='lg:flex flex-col gap-5 hidden' >
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'><AiOutlineTwitter />Twitter</h1>
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'><FaDiscord />Discord</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
