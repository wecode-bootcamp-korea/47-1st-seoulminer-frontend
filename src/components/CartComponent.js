import React from 'react';
import CartCount from './CartCount';
import './CartComponent.scss';

const CartComponent = ({
  cartData,
  number,
  setNumber,
  checked,
  setChecked,
  onQuantityChange,
  id,
  patchCart,
  cartId,
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
        <CartCount
          number={number}
          setNumber={setNumber}
          onQuantityChange={onQuantityChange}
          price={cartData.price}
          id={id}
          patchCart={patchCart}
          cartId={cartId}
          quantity={cartData.quantity}
        />
        <p>{Math.floor(cartData.price).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CartComponent;
