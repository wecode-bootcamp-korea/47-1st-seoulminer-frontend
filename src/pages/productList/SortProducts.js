import React, { useState } from 'react';
import Product from '../../components/Product/Products';
import './SortProducts.scss';

const SortProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('최신순');
  const [sortedData, setSortedData] = useState([]);

  const toggleContent = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const sortProducts = sortBy => {
    setSelectedButton(sortBy);

    let sortedProducts = [...sortedData];

    if (sortBy === '높은 가격순') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === '낮은 가격순') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === '최신순') {
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    setSortedData(sortedProducts);
    setIsOpen(false);
  };

  const toggleCondition = condition => {
    return selectedButton === condition ? 'sortBtn selected' : 'sortBtn';
  };

  return (
    <div className="toggleContainer">
      <div className="toggle">
        <button className="toggleBtn" onClick={toggleContent}>
          {isOpen ? selectedButton : '최신순'}
        </button>
        {isOpen && (
          <ul className="toggleContent">
            <li>
              <button
                className={toggleCondition('높은 가격순')}
                onClick={() => sortProducts('높은 가격순')}
              >
                높은 가격순
              </button>
            </li>
            <li>
              <button
                className={toggleCondition('낮은 가격순')}
                onClick={() => sortProducts('낮은 가격순')}
              >
                낮은 가격순
              </button>
            </li>
            <li>
              <button
                className={toggleCondition('최신순')}
                onClick={() => sortProducts('최신순')}
              >
                최신순
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="productsList">
        {sortedData.map(product => (
          <Product
            key={product.id}
            data={product}
            image={{
              thumbnail: product.thumbnail_image,
              hover: product.hover_image,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SortProducts;
