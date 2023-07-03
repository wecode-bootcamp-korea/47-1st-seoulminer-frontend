import React from 'react';
import './Count.scss';

const Count = props => {
  const { number, setNumber } = props;
  function upNumber() {
    setNumber(prev => prev + 1);
  }

  function downNumber() {
    if (number <= 1) {
      return;
    }
    setNumber(prev => prev - 1);
  }

  return (
    <div className="count">
      <div className="countInput">
        <button
          className="countBtn"
          onClick={() => {
            downNumber(number);
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          className="countBtn"
          onClick={() => {
            upNumber(number);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
