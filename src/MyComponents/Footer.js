import React from 'react'
import Group from '../image/Group 2.png'
import Alexandra from '../image/alexandria.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import twitter from '../image/twitter2.png'
import discord from '../image/discord2.png'
function Footer() {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center   mx-auto mt-[109px] mb-[30px]'>

                <img src={Group} alt="Group" className='flex justify-center items-center' />
                <p className='subscribe text-center text-[#21233B] text-[40px] sm:text-[48px] -mt-6 font-[400px]'>SUBSCRIBE</p>
                <p className='text-[#303365] w-[312px] mx-auto sm:w-[532px] font-sans text-[16px] md:text-[18px] lg:text-[20px] text-center  font-[400px]'>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>

            </div>
            <div className=' px-[10px]  flex justify-center items-center mb-[100px] sm:mb-[130px]  '>
                <div className='w-[80%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[35%]  relative'>

                    <input type="text" placeholder='Enter Your Email Address' className='placeholder:text-[14px] sm:placeholder:text-[16px] hello font-normal border-[1px] border-[#DEDFE2] px-[10px] md:px-[30px]  rounded-[8px] w-[100%] h-[45px] sm:h-[52px]' />
                    <button className=' bg-[#7D75D8]  w-[85px] sm:w-[139px] h-[45px] sm:h-[52px] text-white text-[14px] absolute  right-[0] rounded-[8px] '>SEND</button>
                </div>


            </div>

            <div className='w-[100%] mx-auto bg-[#0E0F1E] flex flex-col  sm:flex-row  justify-between px-[2%] sm:px-[10%]'>
                <div>
                    <div
                        className='flex flex-col justify-center pt-[75px] pb-[88px] relative'>
                        <div className='flex justify-center items-center'>
                            <img src={Alexandra} alt="Alexandra" className='w-[294px] ' />
                        </div>


                        <div className='hidden sm:block mt-10'>
                            <p className='text-[14px] font-normal  text-[#F6F6F6] opacity-[70%] '> © 2022 Alexandria Labs. All Right Reserved</p>
                        </div>

                        <div className='max-sm:flex   hidden justify-center items-center pl-2 gap-5 mt-5 '>
                            <img src={twitter} className='w-[35px] h-[35px]' />
                            <img src={discord} className='w-[35px] h-[35px]' />


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
                    <div className='lg:flex flex-col gap-5 hidden ' >
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'><img src={twitter}  className='w-[24px] h-[24px]'/>Twitter</h1>
                        <h1 className='text-[16px] text-[#F6F6F6] font-normal font-sans flex gap-3'> <img src={discord} className='w-[24px] h-[24px]' /> Discord</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
