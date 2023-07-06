import React, { useState } from 'react';
import { useEffect } from 'react';
import CartCheckBox from './CartCheckBox';
import Count from './Count';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.175:3000/carts/list`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(result => setCartData(result.data[0]));
  }, []);

  const token = localStorage.getItem('token');
  console.log(cartData);

  return (
    <div className="cartContainer">
      <div className="cartHeader">
        <div className="orderStep">
          <p className="cartText">장바구니</p>
        </div>
      </div>
      <div className="cartWrapper">
        <div className="cartContent">
          <div className="checkboxHeader">
            {cartData.length === 0 ? (
              <div className="dataNone">
                <h2 className="title">앗!</h2>
                <div className="text">장바구니가 텅~</div>
              </div>
            ) : (
              <div className="cartCheckboxComponent">
                <CartCheckBox />
                <Count />
                <div className="cartBorder" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
