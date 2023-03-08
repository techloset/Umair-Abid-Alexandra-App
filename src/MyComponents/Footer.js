import React from 'react'
import Group from '../Image/Group 2.png'
import Frame from '../Image/Frame 1075.png'
import Alexandra from '../Image/alexandria.png'
import {AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord} from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center my-52'>
                <img src={Group} alt="" className='items-center justify-center' />
                <img src={Frame} alt="" />
                <div>
                    <input type="text" placeholder='Enter Your Email Address' className='hover:bg-gray-800 border rounded-md px-8 py-3' />
                    <button className='bg-purple-500 px-7 py-3 rounded-md hover:bg-gray-500'>Send</button>
                </div>

            </div>
            <footer className='bg-[#1f2937] py-12'>
                <div className='container mx-auto px-2'>
                    <div className=' md:flex justify-between'>
                        <div >
                       <img src={Alexandra} alt="" className='' />
                       <p>© 2022 Alexandria Labs. All Right Reserved</p>

                        </div>
                        <div >
                            <h1 className='mb-4 text-3xl'>About</h1>
                            <h1 className='mb-4 text-3xl'>Early Access</h1>
                          

                        </div>
                        <div >
                            <h1 className='mb-4 text-3xl flex-auto'>Authors Submission</h1>
                            <h1 className='mb-4 text-3xl '>Team</h1>

                        </div>
                        <div className='' >
                            <h1 className='mb-4 text-3xl flex'><AiOutlineTwitter/>Twitter</h1>
                            <h1 className='mb-4 text-3xl flex'><FaDiscord/>Discord</h1>
                            
                        

                        </div>

                    </div>


                </div>

            </footer>

        </div>

    )
}

export default Footer
