import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopButton from '../TopButton';
import SortProducts from './SortProducts';
import Product from '../../components/Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  const location = useLocation();
  const queryString = location.search;

  useEffect(() => {
    fetch('/data/MainData.json')
      // fetch(`http://10.58.52.59:3000/products/list${queryString}`)
      .then(response => response.json())
      .then(data => setProductListData(data));
    // .then(data => setProductListData(data.data));
    // }, [queryString]);
  }, []);
  console.log(productListData);

  return (
    <div>
      <div className="productsLists">
        <div className="titleContainer">
          <p className="title">전체</p>
          <SortProducts productListData={productListData} />
        </div>
        <div className="border" />
        <div className="sortProductsList">
          {productListData.map(productData => (
            <Product
              key={productData.id}
              data={productData}
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>
      <TopButton />
    </div>
  );
};

export default ProductList;
