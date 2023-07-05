import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopButton from '../TopButton';
import SortProducts from './SortProducts';
import './ProductList.scss';

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  const location = useLocation();
  const queryString = location.search;

  useEffect(() => {
    fetch(`http://10.58.52.175:3000/products/list${queryString}`)
      .then(response => response.json())
      .then(data => setProductListData(data));
  }, [queryString]);

  return (
    <div>
      <div className="productListHeader">
        {productListData.length > 0 &&
          productListData.map(product => (
            <div key={product.id} className="productListTitle">
              <div className="titleContainer">
                <p className="title">{product.title}</p>
                <p className="secondTitle">{product.secondTitle}</p>
              </div>
            </div>
          ))}
        <div className="borderBottom" />
      </div>
      <SortProducts products={productListData} />
      <TopButton />
    </div>
  );
};

export default ProductList;
