import React, { useState, useEffect } from 'react';
import './CartCheckBox.scss';
const CartCheckBox = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([false, false, false, false]);

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
    const updatedCheckBoxes = checkBoxes.filter(
      (_, index) => !checkBoxes[index]
    );
    setCheckBoxes(updatedCheckBoxes);
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
            <img
              className="cartImg"
              src="/images/IMG_7632.jpg"
              alt="productImg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCheckBox;
