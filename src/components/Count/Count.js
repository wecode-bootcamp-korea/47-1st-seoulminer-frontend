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
            downNumber();
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          className="countBtn"
          onClick={() => {
            upNumber();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
