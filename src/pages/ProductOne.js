import { useEffect, useState } from 'react';

import Product from './Product';
import './ProductOne.scss';

const ProductOne = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="productOne">
      {datas.map(data => (
        <Product data={data} key={data.id} />
      ))}
    </div>
  );
};

export default ProductOne;
