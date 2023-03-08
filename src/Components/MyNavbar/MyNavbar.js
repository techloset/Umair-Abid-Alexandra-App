// import React from 'react';

// const MyNavbar = () => {
//   return (
//     <nav 
//     className=''>
//       <ul>
//       <h1>alexandria</h1>
//         <li>About</li>
//         <li>Authors</li>
//         <li>Team</li>
//         <li>
//             <button  className='button'>CONNECT TEAM</button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default MyNavbar;
import React from 'react';
import Frame00 from '../../Image/Frame 00.png'

const MyNavbar = () => {
  return (
    <nav 
      className='flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10'>
      <div className='flex items-center mr-6'>
        {/* <h1 className='text-xl font-bold text-gray-800'>alexandria</h1> */}
        <img src={Frame00}/>
      </div>
      <div className=''>
        <button className='flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-gray-600 focus:outline-none md:hidden '>
          <svg className=' w-3 h-3 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
          </svg>
        </button>
      </div>
      <div className=''>
        <ul className='hidden md:flex md:items-center'>
          <li className='mr-6'>
            <a className='text-gray-800 hover:text-gray-600' href='#'>About</a>
          </li>
          <li className='mr-6'>
            <a className='text-gray-800 hover:text-gray-600' href='#'>Authors</a>
          </li>
          <li className='mr-6'>
            <a className='text-gray-800 hover:text-gray-600' href='#'>Team</a>
          </li>
          <li>
            <button className='button px-4 py-2'>CONNECT TEAM</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
