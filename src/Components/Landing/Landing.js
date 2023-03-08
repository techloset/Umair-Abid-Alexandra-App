import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import MyNavbar from '../MyNavbar/MyNavbar'
import group from '../../Image/Group 1111.png'
import buttonimage from '../../Image/Vector.png'
import MultipleItems from '../../Components/CardSlider/CardSlider'
import alexandria from '../../Image/alexandria.png'
import absolute from '../../Image/Group 1110.png'
import buttomImg from '../../Image/pen.png'
import Frame13 from '../../Image/Frame 13.png'
import Frame14 from '../../Image/Frame 14.png'
import Frame15 from '../../Image/Frame 15.png'
import Frame84 from '../../Image/Frame 84.png'
import Frame17 from '../../Image/Frame 17.png'
import Group1000 from '../../Image/Group 1000.png'
import Group30 from '../../Image/Frame 30.png'
import Twitter from '../../Image/Twitter.png'
import Discord from '../../Image/Discord.png'

function Landing() {
  return (

    <div class="bg-image bg-cover bg-center">


      <MyNavbar />

      {/* <img src={rectangle} /> */}
      <div className='myGroup justify-around'>
        <div className='hello'>


          <p className='book'>Your books <br /> on-chain </p>
          <p className='publish'>
            The storefront you need to publish and
            <br />  sell books as NFTs
          </p>
          <div className='button-flex'>

            <button className='explore' > <img src={buttonimage} alt="" />EXPLORE</button>
            <button className='publishButton'>PUBLISH</button>
          </div>
        </div>

        /<div className=''>
          <img src={group} alt="" />

        </div>
      </div>
      <div className='cardSlider'>
        <h1 className='work'>FEATURED WORKS</h1>
        <MultipleItems />
      </div>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='want'>Want to add your work?</h1>
        <button className='contact'>CONTACT US</button>

      </div>
      <div className=' m-5 flex flex-col items-center justify-center'>
        <div className='flex flex-row justify-center items-center'>
          <p className='welcome'>Welcome to the</p><p className='wall'>wall of</p>
        </div>

        <img src={alexandria} alt="" className=' w-72' />
        <p className='text-center  from-neutral-600 font-medium p-4'>This is where we tell you at all our <br />
          hopes and aspirations.
          <br />
          Behold the wanderer of the literary metaverse.</p>
      </div>
      <div className='myBorder'>
        <div className='first-div' >
          <img src={absolute} alt="" className='myImage' />

        </div>
        <div className='sec-div'>
          <p className='nft'>Publish a book NFT</p>
          <p className='non'>Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p>
          <button className='publish-work'> PUBLISH WORKS</button>
        </div>
      </div>
      <div className='sec-border border border-r-8'>
        <div className='heloo'>
          <img src={buttomImg} alt="" className='pen' />
        </div>
        <div className='two-para'>
          <p className='discover'>DISCOVER THE</p>
          <p className='benefits pl-3'>BENEFITS</p>
        </div>
        <div className='new-card'>
          <div className='card'>
            <img src={Frame13} alt="" />
          </div>
          <div className='card'>
            <img src={Frame14} alt="" />
          </div>
          <div className='card'>
            <img src={Frame15} alt="" />
          </div>
        </div>
        <div className='nextCard'>
          <div className='firstCard'>
            <img src={Frame84} alt="" />
          </div>

          <div className='secondCard'>
            <img src={Frame17} alt="" />

          </div>
        </div>


      </div>
      <div className='block mx-auto'>
        <img src={Group1000} alt="" className='block mx-auto' />
        <p className='font-serif font-medium text-4xl text-center'>SUBSCRIBE</p>
        <p className='text-center font-sans text-lg'>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
        <div className='flex items-center justify-center'>
          <input type="text" placeholder='Enter your email address' className='font-sans text-xl text-left py-2 px-8 border border-gray-300 rounded-md' />
          <button className='bg-cyan-800 border text-black font-bold rounded-2xl px-3 py-2'>Send</button>
        </div>

      </div>

      {/* <div className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto grid grid-cols-4 gap-4 px-4">
          <div>
            <img src={Group30} className="text-lg font-bold mb-2" />
            <p className='font-sans whitespace-nowrap'>© 2022 Alexandria Labs. All Right Reserved</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2" >About</h1>
            <h1 className="text-2xl font-bold mb-2" >Early Access</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2" >Authors Submissions</h1>
            <h1 className="text-2xl font-bold mb-2" >Team</h1>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <ul className="flex">
              <li className="mr-4"><a href="#"><FaFacebook className="text-gray-400 hover:text-gray-200" /></a></li>

              <p><img src={Twitter} alt="" />Twitter</p>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="flex mt-5 h-48 ">
        <div className="flex-1 bg-black p-4 pt-5">
          <img src={Group30} alt="" className='pl-8' />
          <p className='text-gray-800 pt-4 pl-8'>© 2022 Alexandria Labs. All Right Reserved</p>
        </div>
        <div className="flex-1 bg-black p-4   pt-5">
          <div className='flex flex-row'>
            <h4 className='text-yellow-100'>About</h4>
            <h4 className='pl-36 text-yellow-100'>Author Submissions</h4>
            <div className='flex flex-row pl-20'>
              <img src={Twitter} alt="Image" className='' />
              <h4 className="text-lg pl-3 text-yellow-100 ">Twitter</h4>

            </div>


          </div>
          <div className='flex  flex-row'>

            <h4 className=' text-yellow-100'>Early Access</h4>
            <h4 className='pl-20 text-yellow-100'>  Team</h4>
            <div className='flex flex-row pl-60'>
              <img src={Discord} alt="Image" className='' />
              <h4 className="text-lg pl-3 text-yellow-100 ">Discords</h4>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Landing
