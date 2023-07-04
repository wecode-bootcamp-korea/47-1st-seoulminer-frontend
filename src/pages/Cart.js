import React, { useState } from 'react';
import CartCheckBox from './CartCheckBox';
import './Cart.scss';

const Cart = () => {
  const arr = [1];

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
          </div>
        </div>
      </div>
      <div className="paymentArea">
        <div className="paymentBorder">
          <p className="price">총 상품금액</p>
          <p className="priceNum">0원</p>
          <p className="priceText">배송비</p>
          <p className="deliveryNum">+0원</p>
          <div className="paymentBorderTwo">
            <div className="pay">
              <p className="payMoney">결제예상금액</p>
              <p className="lastNum">0원</p>
            </div>
          </div>
          <div className="payButton">
            <button className="paymentButton">0원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
