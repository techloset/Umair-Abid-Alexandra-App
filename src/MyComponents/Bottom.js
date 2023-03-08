import React from 'react'
import Frame7 from '../Image/Frame 7.png'
import Groupe from '../Image/Group 1110.png'
import Arrow from '../Image/Arrow 1.png'
import absolute from '../Image/pen.png'
import discover from '../Image/DISCOVER.png'
import Frame13 from '../Image/Frame 13.png'
import Frame14 from '../Image/Frame 14.png'
import Frame15 from '../Image/Frame 15.png'
import Frame16 from '../Image/Frame 16.png'
import Frame17 from '../Image/Frame 17.png'
function Bottom() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='want text-3xl text-center mt-20'>Want to add your work?</h1>
                <button className='text-white bg-gradient-to-r from-indigo-600 to-purple-500 rounded-md px-5 py-3'>CONTACT US</button>
                <div className='border-t border-b border-gray-700 mt-20'>
                    <img src={Frame7} alt="" className='mt-5' />
                    <p className='hopes text-3xl mt-5 mb-5 text-center'>This is where we tell you at all our <br />
                        hopes and aspirations. <br />
                        Behold the wanderer of the literary metaverse.</p>

                </div>
            </div>

            <div className='max-w-6xl my-20 rounded-lg md:py-[80] py-5 flex mx-auto bg-slate-700 md:flex-row flex-col '>
                <div className='basis-[45%]'>
                    <img src={Groupe} alt="" className='w-[400px] pl-10 h-[500px] top-[-20]' />
                </div>

                <div className='basis-[55%]'>
                    <h1 className='publish text-5xl text-white pb-5  pt-10'>Publish a book NFT</h1>
                    <p className='text-white text-2xl py-5 leading-loose'>Duis non orci justo. Nulla lobortis, elit ac  imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p>
                    <button className='bg-gradient-to-r flex from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-md mt-9'> Publish Works <img src={Arrow} alt="" className='pl-5' /></button>


                </div>


            </div>
            <div className='border-2 h-auto my-10 border-gray-400 max-w-[90%] mx-auto relative '>
                <img src={absolute} alt="" className='absolute -mt-16 right-0' />
                <img src={discover} alt="" className='justify-center items-center mx-auto mt-60' />
                <div className=' sm:max-w-full  md:flex flex-wrap  mx-auto'>
                    <div className=''>
                        <img src={Frame13} alt="" />

                    </div>
                    <div className=''>
                        <img src={Frame14} alt="" />

                    </div>
                    <div className=''>
                        <img src={Frame15} alt="" />

                    </div>
                    <div className='mx-auto justify-evenly'>
                        <img src={Frame16} alt="" />

                    </div>
                    <div className='mx-auto justify-arounditems-center'>
                        <img src={Frame17} alt="" />
                    </div>

                </div>

            </div>


        </div>


    )
}

export default Bottom
