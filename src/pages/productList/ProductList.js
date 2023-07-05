import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopButton from '../TopButton';
import SortProducts from './SortProducts';
import './ProductList.scss';

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/ProductListData.json')
      .then(response => response.json())
      .then(data => setProductListData(data));
  }, []);
  return (
    <div>
      <div className="productListHeader">
        {productListData.map(product => (
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
