import React, { useState } from 'react';

const CartCount = ({
  onQuantityChange,
  price,
  id,
  patchCart,
  cartId,
  quantity,
}) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const handleIncrease = () => {
    setProductQuantity(productQuantity + 1);
    onQuantityChange(productQuantity + 1, price, id);
    patchCart(cartId, productQuantity + 1);
  };

  const handleDecrease = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
      onQuantityChange(productQuantity - 1, price, id);
      patchCart(cartId, productQuantity - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          className="countBtn"
          onClick={handleDecrease}
          disabled={productQuantity === 0}
        >
          -
        </button>
        <span className="countInputText">{productQuantity}</span>
        <button className="countBtn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartCount;
