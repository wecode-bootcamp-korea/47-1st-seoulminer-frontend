import React, { useEffect, useState } from 'react';
import SortProducts from './SortProducts';
import TopButton from '../TopButton';
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
      <div className="toggle">
        <SortProducts products={mainData} />
      </div>
      <TopButton />
    </div>
  );
};

export default ViewAll;
