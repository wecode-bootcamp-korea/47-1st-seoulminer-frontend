import React, { useState, useEffect } from 'react';

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
    <>
      <div className="selectCheckbox">
        <p className="selectText">전체선택(1/1)</p>
        <input
          className="selectAll"
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
        />
      </div>
      <div className="delete">
        <button className="deleteText" onClick={handleDeleteSelected}>
          선택삭제
        </button>
      </div>
      {checkBoxes.map((checked, index) => (
        <div className="checkboxArea" key={index}>
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => handleCheckBoxChange(index)}
          />
        </div>
      ))}
    </>
  );
};

export default CartCheckBox;
