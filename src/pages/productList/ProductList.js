import React, { useEffect, useState } from 'react';
import TopButton from '../TopButton';
// import SortProducts from './SortProducts';
import './ProductList.scss';

const ProductList = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/ProductListData.json')
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  return (
    <div>
      <div className="productListHeader">
        {ProductData.map(product => (
          <div key={product.id} className="productListTitle">
            <div className="titleContainer">
              <p className="title">{product.title}</p>
              <p className="secondTitle">{product.secondTitle}</p>
            </div>
          </div>
        ))}
        <div className="borderBottom" />
      </div>
      {/* <SortProducts products={ProductData} /> */}
      <TopButton />
    </div>
  );
};

export default ProductList;
