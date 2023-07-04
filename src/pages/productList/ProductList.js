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

  // const renderTag = () => {
  //   console.log(2);
  //   LIST_MENT.map(data => {
  //     console.log(3);
  //     return (
  //       <div className="abc" key={data.id}>
  //         {data.ment}
  //       </div>
  //     );
  //   });
  // };

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
        {/* {renderTag()} */}
        <div className="borderBottom" />
      </div>
      {/* <SortProducts products={ProductData} /> */}
      <TopButton />
    </div>
  );
};

export default ProductList;

// const LIST_MENT = [
//   { id: 1, ment: '전체' },
//   { id: 2, ment: '전체' },
//   { id: 3, ment: '전체' },
//   { id: 4, ment: '전체' },
//   { id: 5, ment: '전체' },
//   { id: 6, ment: '전체' },
// ];
