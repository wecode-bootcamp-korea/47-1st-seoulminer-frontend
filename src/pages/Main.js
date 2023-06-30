// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faChevronLeft,
//   faChevronRight,
//   faCircle,
// } from '@fortawesome/free-solid-svg-icons';
// // import { useState } from 'react';
// import './Product.scss';
// import Product from './Product';
// // import mainData from '../../public/data/MainData.json';
// import './Main.scss';

// const Main = () => {
//   fetch;
//   return (
//     <div className="main">
//       <div className="mainSlide">
//         <Link to="">
//           <img
//             src="/images/MainSlide1.png"
//             alt="mainSlide"
//             className="mainPicture1"
//           />
//           <img
//             src="/images/MainSlide2.png"
//             alt="mainSlide"
//             className="mainPicture2"
//           />
//           <img
//             src="/images/MainSlide3.png"
//             alt="mainSlide"
//             className="mainPicture3"
//           />
//           <img
//             src="/images/MainSlide4.png"
//             alt="mainSlide"
//             className="mainPicture4"
//           />
//           <img
//             src="/images/MainSlide5.png"
//             alt="mainSlide"
//             className="mainPicture5"
//           />
//           <img
//             src="/images/MainSlide6.png"
//             alt="mainSlide"
//             className="mainPicture6"
//           />
//           <div className="icons">
//             <FontAwesomeIcon icon={faChevronLeft} />
//             <FontAwesomeIcon icon={faChevronRight} className="rightBtn" />
//           </div>
//           <div className="dots">
//             <FontAwesomeIcon icon={faCircle} />
//             <FontAwesomeIcon icon={faCircle} className="dot" />
//             <FontAwesomeIcon icon={faCircle} className="dot" />
//             <FontAwesomeIcon icon={faCircle} className="dot" />
//             <FontAwesomeIcon icon={faCircle} className="dot" />
//           </div>
//         </Link>
//         <div className="firstBanner">
//           <img
//             className="firstMainBanner"
//             src="/images/firstBanner.jpg"
//             alt="firstBanner"
//           />
//         </div>
//         <div className="recommendItem" />
//         {mainData.map(product => (
//           <Product
//             key={product.id}
//             data={product}
//             image={{
//               thumbnail: product.thumbnail_image,
//               hover: product.hover_image,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;
