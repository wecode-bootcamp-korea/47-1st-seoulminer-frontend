import React, { useState, useEffect } from 'react';
import MainSlide from './MainSlide';
import Product from '../components/Product/Product';
import TopButton from './TopButton';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    // fetch('/data/MainData.json')
    fetch('http://52.78.25.104:3000/products/list?limit=20')
      .then(response => response.json())
      // .then(data => setMainData(data));
      .then(data => setMainData(data.data));
  }, []);

  return (
    <div className="main">
      <MainSlide />
      <TopButton />
      <div className="firstBanner">
        <img
          className="firstMainBanner"
          src="/images/firstBanner.png"
          alt="firstBanner"
        />
      </div>
      <div className="recommendItem">
        {mainData?.slice(10, 13).map(product => (
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
        {mainData?.slice(0, 3).map(product => (
          <Product key={product.productId} data={product} />
        ))}
      </div>
    </div>
  );
};
export default Main;
