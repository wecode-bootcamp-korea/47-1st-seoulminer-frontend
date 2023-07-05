import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import MainSlide from './MainSlide';
import Product from '../components/Product/Product';
import TopButton from './TopButton';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch('/data/MainData.json')
      // fetch('http://10.58.52.154:3000/products/list')
      .then(response => response.json())
      .then(data => setMainData(data));
    // .then(data => setMainData(data.data));
  }, []);

  return (
    <div className="main">
      <MainSlide />
      <div className="dots">
        <button className="dotsBtn">
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} className="dot" />
          <FontAwesomeIcon icon={faCircle} className="dot" />
          <FontAwesomeIcon icon={faCircle} className="dot" />
          <FontAwesomeIcon icon={faCircle} className="dot" />
        </button>
      </div>
      <TopButton />
      <div className="firstBanner">
        <img
          className="firstMainBanner"
          src="/images/firstBanner.png"
          alt="firstBanner"
        />
      </div>
      <div className="recommendItem">
        {mainData.slice(0, 3).map(product => (
          <Product key={product.productId} data={product} />
        ))}
      </div>
      <div className="secondBanner">
        <img
          className="secondMainBanner"
          src="/images/secondBanner.png"
          alt="secondBanner"
        />
      </div>
      <div className="recommendItem">
        {mainData.slice(0, 3).map(product => (
          <Product key={product.productId} data={product} />
        ))}
      </div>
      <div className="thirdBanner">
        <img
          className="thirdMainBanner"
          src="/images/thirdBanner.png"
          alt="thirdBanner"
        />
      </div>
    </div>
  );
};
export default Main;
