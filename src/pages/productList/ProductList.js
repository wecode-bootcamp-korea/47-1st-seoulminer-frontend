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

  const titleText = () => {
    if (productListData.length > 0) {
      if (
        productListData[0].productCategoryId === 1 &&
        productListData.length === 50
      ) {
        return '전체';
      } else if (productListData[0].productCategoryId === 1) {
        return '문구';
      } else if (productListData[0].productCategoryId === 2) {
        return '리빙';
      } else if (productListData[0].productCategoryId === 3) {
        return '책/매거진F';
      } else if (productListData[0].productCategoryId === 4) {
        return '의류';
      } else if (productListData[0].productCategoryId === 5) {
        return '콜라보레이션';
      }
    }
  };

  useEffect(() => {
    // fetch('/data/MainData.json')
    fetch(`http://10.58.52.145:3000/products/list${queryString}&limit=50`)
      .then(response => response.json())
      // .then(data => setProductListData(data));
      .then(data => setProductListData(data.data));
  }, [queryString]);
  // }, []);
  console.log(productListData);

  return (
    <div>
      <div className="productsLists">
        <div className="titleContainer">
          <p className="title">{titleText()}</p>
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
