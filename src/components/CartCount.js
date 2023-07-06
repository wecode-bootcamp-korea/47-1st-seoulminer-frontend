import React, { useState } from 'react';

const CartCount = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          className="countBtn"
          onClick={handleDecrease}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="countInputText">{quantity}</span>
        <button className="countBtn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartCount;
