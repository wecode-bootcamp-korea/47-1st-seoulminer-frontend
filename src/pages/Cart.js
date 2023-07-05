import React, { useState } from 'react';
import CartCheckBox from './CartCheckBox';
import './Cart.scss';

const Cart = () => {
  const arr = [1];
  const [quantity, setQuantity] = useState(0);
  const price = 10000;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;
  return (
    <div className="cartContainer">
      <div className="orderStep">
        <p className="cartText">장바구니</p>
      </div>
      <div className="cartWrapper">
        <div className="cartContent">
          <div className="cartHeader">
            {arr.length > 0 && (
              <div className="checkboxCompo">
                <CartCheckBox />
              </div>
            )}
            {arr.length === 0 && (
              <div className="dataNone">
                <h2 className="title">앗!</h2>
                <div className="text">장바구니가 텅~</div>
              </div>
            )}
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={handleDecrease}
                disabled={quantity === 0}
              >
                -
              </button>
              <span className="quantityText">{quantity}</span>
              <button className="quantityButton" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="paymentArea">
        <div className="paymentBorder">
          <p className="price">총 상품금액</p>
          <p className="priceNum">{totalPrice.toLocaleString()}원</p>
          <p className="priceText">배송비</p>
          <p className="deliveryNum">+0원</p>
          <div className="paymentBorderTwo">
            <div className="pay">
              <p className="payMoney">결제예상금액</p>
              <p className="lastNum">{totalPrice.toLocaleString()}원</p>
            </div>
          </div>
          <div className="payButton">
            <button
              className={`paymentButton ${quantity === 0 ? 'disabled' : ''}`}
              disabled={quantity === 0}
            >
              {quantity > 0
                ? `${totalPrice.toLocaleString()}원 주문하기`
                : '0원 주문하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
