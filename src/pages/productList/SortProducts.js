import React, { useState, useEffect } from 'react';
import Product from '../Product';
import './SortProducts.scss';

const SortProducts = ({ products }) => {
  const [sortedData, setSortedData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    setSortedData([...products]);
  }, [products]);

  const handleSortChange = () => {
    setIsSorting(!isSorting);
    const sorted = [...sortedData];
    sorted.sort((a, b) => {
      if (isSorting) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedData(sorted);
    setIsToggleOpen(false);
  };

  const handleToggleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleOptionSelect = option => {
    setSelectedSort(option);
    handleSortChange();
  };

  return (
    <div className="toggleContainer">
      <div className="toggle">
        <button onClick={handleToggleClick}>
          {selectedSort ? selectedSort : '👇'}
        </button>
        {isToggleOpen && (
          <ul className="toggleContent">
            <li>
              <button onClick={() => handleOptionSelect('최신순')}>
                최신순
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionSelect('가격 낮은순')}>
                가격 낮은순
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionSelect('가격 높은순')}>
                가격 높은순
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="productsList">
        {sortedData.map(data => (
          <Product data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
export default SortProducts;
