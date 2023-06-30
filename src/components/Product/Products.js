import { useEffect, useState } from 'react';
import Product from './Product';
import './Products.scss';

const Products = () => {
  const [carouselDatas, setCarouselData] = useState([]);

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setCarouselData(data));
  }, []);

  return (
    <div className="products">
      {carouselDatas.map(data => {
        return <Product data={data} key={data.id} />;
      })}
    </div>
  );
};

export default Products;
