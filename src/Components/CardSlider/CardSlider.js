// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import React, { Component } from "react";
// import Slider from "react-slick";
// import Frame01 from '../../Image/image 6.png'
// import Frame02 from '../../Image/image 7.png'
// import Frame03 from '../../Image/image 8.png'

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       // dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay:true
//    ,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             // initialSlide: 2
//           }}] };
//     return (
//       <div className="myCard">
        
//         <Slider {...settings}>
//           <div  >
//             <img src={Frame01}  alt="..."  className="settingImage" />
            
//           </div>
//           <div>
//             <img src={Frame02}  alt="..."  className="settingImage"/>
            
//           </div>
//           <div >
//             <img src={Frame03}  alt="..." className="settingImage" />
            
//           </div>
//           <div  >
//             <img src={Frame01}  alt="..." className="settingImage" />
            
//           </div>
//           <div >
//             <img src={Frame02}  alt="..." className="settingImage" />
            
//           </div>
//           <div  >
//             <img src={Frame03}  alt="..." className="settingImage" />
            
//           </div>
//           {/* <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div> */}
//         </Slider>
//       </div>
//     );
//   }
// }