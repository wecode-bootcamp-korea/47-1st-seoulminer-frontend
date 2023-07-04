import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="container">
      <div className="firstTextBorder">
        <p className="firstText">장바구니</p>
      </div>
      <div className="text">
        <p className="secondText">앗!</p>
        <p className="thirdText">장바구니가 텅~~</p>
      </div>
      <div className="paymentArea">
        <div className="paymentList">
          <p>총 상품금액</p>
          <p>배송비</p>
          <p>0원</p>
          <p>+0원</p>
        </div>
        <div className="paymentResult">
          <p>결제예상금액</p>
          <p>0원</p>
        </div>
        <div className="paymentButton">
          <button className="payBtn">0원 주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
