import React, { useEffect, useState } from 'react';
import SortProducts from './SortProducts';
import TopButton from '../TopButton';
import './ViewAll.scss';
import ProductListData from './ProductListData';

const ViewAll = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setMainData(data));
  }, []);

  return (
    <>
      {ProductListData.map((data, index) => (
        <div className="productListHeader" key={index}>
          <div className="productListTitle">
            <div className="titleContainer">
              <p className="title">{data.title}</p>
              <p className="secondTitle"> | {data.secondTitle}</p>
            </div>
          </div>
          <div className="productInfo">
            <p>{data.productInfo}</p>
          </div>
          <div className="toggle">
            <SortProducts products={mainData} />
          </div>
          <TopButton />
        </div>
      ))}
    </>
  );
};

export default ViewAll;
