import React, { useState } from 'react';
// import Product from '../../components/Product/Product';
import './SortProducts.scss';

const SortProducts = ({ productListData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('최신순');
  // const [sortedData, setSortedData] = useState([]);

  const toggleContent = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const sortProducts = sortBy => {
    setSelectedButton(sortBy);

    // let sortedProducts = [...productListData];

    // if (sortBy === '높은 가격순') {
    //   sortedProducts.sort((a, b) => b.price - a.price);
    // } else if (sortBy === '낮은 가격순') {
    //   sortedProducts.sort((a, b) => a.price - b.price);
    // } else if (sortBy === '최신순') {
    //   sortedProducts.sort(
    //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    //   );
    // }

    // setSortedData(sortedProducts);
    // setIsOpen(false);
  };

  const toggleCondition = condition => {
    return selectedButton === condition ? 'sortBtn selected' : 'sortBtn';
  };

  return (
    <div className="sortProducts">
      <div className="toggle">
        <button className="sortToggleBtn" onClick={toggleContent}>
          {isOpen ? selectedButton : '최신순'}
        </button>
        <ul className="toggleContent" style={{ opacity: `${isOpen ? 1 : 0}` }}>
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
      </div>
    </div>
  );
};

export default SortProducts;
