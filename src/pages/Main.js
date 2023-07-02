import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import MainSlide from './MainSlide';
import Product from './Product';
import TopButton from './TopButton';
import './Product.scss';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch('/data/MainData.json')
      .then(response => response.json())
      .then(data => setMainData(data));
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
        {mainData.map(product => (
          <Product
            key={product.id}
            data={product}
            image={{
              thumbnail: product.thumbnail_image,
              hover: product.hover_image,
            }}
          />
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
        {mainData.map(product => (
          <Product
            key={product.id}
            data={product}
            image={{
              thumbnail: product.thumbnail_image,
              hover: product.hover_image,
            }}
          />
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
