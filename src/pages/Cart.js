import React, { useEffect, useState } from 'react';
import CartCheckBox from './CartCheckBox';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.52.145:3000/carts`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(response => response.json())
      .then(result => {
        console.log('>>>>>>>', result);
        setCartData(result.data[0]);
      })
      .catch(error => console.error(error));
  }, []);

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
                <h2 className="cartTitle">앗!</h2>
                <div className="cartText">장바구니가 텅~</div>
              </div>
            ) : (
              <div className="cartCheckboxComponent">
                <CartCheckBox cartData={cartData} setCartData={setCartData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
