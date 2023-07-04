import React from 'react';
import './Count.scss';

const Count = ({ number, setNumber }) => {
  const upNumber = () => {
    setNumber(number + 1);
  };

  const downNumber = () => {
    if (number <= 1) {
      return;
    }
    setNumber(number - 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button className="countBtn" onClick={downNumber}>
          -
        </button>
        <div className="countInputText">{number}</div>
        <button className="countBtn" onClick={upNumber}>
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
