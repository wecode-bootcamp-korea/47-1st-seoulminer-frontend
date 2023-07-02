import React, { useEffect, useState } from 'react';
import Product from '../Product';
import './ViewAll.scss';

const ViewAll = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setMainData(data));
  }, []);

  return (
    <div className="productListHeader">
      <div className="productListTitle">
        <div className="titleContainer">
          <p className="title">전체</p>
          <p className="secondTitle"> | 백만 개 보다는 적음</p>
        </div>
      </div>
      <div className="productInfo">
        <p>여기에 다 있을걸요 ?</p>
      </div>
      <div className="productsList">
        {mainData.map(data => (
          <Product data={data} key={data.id} />
        ))}
      </div>
      <div className="productsList">
        {mainData.map(data => (
          <Product data={data} key={data.id} />
        ))}
      </div>
      <div className="productsList">
        {mainData.map(data => (
          <Product data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
