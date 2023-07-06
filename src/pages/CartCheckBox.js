import React, { useState, useEffect } from 'react';
import './CartCheckBox.scss';
import CartCount from './CartCount';

const CartCheckBox = ({ cartData, setCartData }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([false]);

  useEffect(() => {
    const allSelected = checkBoxes.every(checked => checked);
    setSelectAll(allSelected);
  }, [checkBoxes]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCheckBoxes(checkBoxes.map(() => !selectAll));
  };

  const handleCheckBoxChange = index => {
    const updatedCheckBoxes = [...checkBoxes];
    updatedCheckBoxes[index] = !checkBoxes[index];
    setCheckBoxes(updatedCheckBoxes);
  };

  const handleDeleteSelected = () => {
    // 선택된 상품의 id 목록을 가져옴
    const selectedProductIds = checkBoxes
      .map((checked, index) => (checked ? cartData[index].id : null))
      .filter(productId => productId !== null);

    // 선택된 상품 삭제 요청 보냄
    fetch(``, {
      method: 'DELETE',
      headers: {
        headers: { Authorization: 'token' },
      },
      body: JSON.stringify({ productIds: selectedProductIds }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          const updatedCartData = cartData.filter(
            item => !selectedProductIds.includes(item.id)
          );
          setCartData(updatedCartData);
          setCheckBoxes(Array(updatedCartData.length).fill(false));
        } else {
          console.error('상품 삭제 실패');
        }
      })
      .catch(error => {
        console.error('상품 삭제 요청 실패:', error);
      });
  };

  return (
    <div className="checkboxArea">
      <div className="selectCheckbox">
        <div className="checkboxHeader">
          <p className="selectText">
            <input
              className="selectAll"
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            전체선택
          </p>
          <div className="delete">
            <button className="deleteText" onClick={handleDeleteSelected}>
              선택삭제
            </button>
          </div>
          <div className="cartCheckBox" />
        </div>
      </div>
      {checkBoxes.map((checked, index) => (
        <div className="checkboxArea" key={index}>
          <div className="checkboxInput">
            <input
              className="checkboxOne"
              type="checkbox"
              checked={checked}
              onChange={() => handleCheckBoxChange(index)}
            />
            <p className="productName">1</p>
            <img
              className="cartImg"
              src="/images/IMG_7632.jpg"
              alt="productImg"
            />
            <CartCount />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCheckBox;
