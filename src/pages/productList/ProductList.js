import React, { useEffect, useState } from 'react';
// import SortProducts from './SortProducts';
import { Link } from 'react-router-dom';
import TopButton from '../TopButton';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./data/ProductListData.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      {products.map(product => (
        <div className="productListHeader" key={product.id}>
          <div className="productListTitle">
            <div className="titleContainer">
              <p className="title">{product.title}</p>
              <p className="secondTitle"> | {product.secondTitle}</p>
            </div>
          </div>
          <div className="productInfo">
            <p>{product.productInfo}</p>
          </div>
          {/* <div className="toggle">
            <SortProducts products={products} />
          </div> */}
          <Link />
          <TopButton />
        </div>
      ))}
    </>
  );
};

export default ProductList;
