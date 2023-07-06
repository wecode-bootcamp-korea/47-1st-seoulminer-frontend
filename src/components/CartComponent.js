import React from 'react';
import CartCount from './CartCount';
import './CartComponent.scss';

const CartComponent = ({
  cartData,
  number,
  setNumber,
  checked,
  setChecked,
}) => {
  return (
    <div className="cartComponent">
      <div className="checkAndName">
        <input
          className="checkboxOne"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <p>{cartData.productName}</p>
      </div>
      <div className="right ">
        <CartCount number={number} setNumber={setNumber} />
        <p>{cartData.productPrice}</p>
      </div>
    </div>
  );
};

export default CartComponent;
