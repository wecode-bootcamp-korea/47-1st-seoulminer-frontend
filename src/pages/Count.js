import React, { useState } from 'react';

const Count = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 0 },
    { id: 2, name: 'Product 2', quantity: 0 },
    { id: 3, name: 'Product 3', quantity: 0 },
    { id: 4, name: 'Product 4', quantity: 0 },
  ]);
  const price = 10000;

  const handleIncrease = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrease = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const getTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.quantity * price,
      0
    );
  };

  const isAnyProductSelected = products.some(product => product.quantity > 0);

  return (
    <div className="countComponent">
      {products.map(product => (
        <div key={product.id} className="countContainer">
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrease(product.id)}
              disabled={product.quantity === 0}
            >
              -
            </button>
            <span className="quantityText">{product.quantity}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrease(product.id)}
            >
              +
            </button>
          </div>
          <div className="paymentArea">
            <div className="paymentBorder">
              <p className="price">총 상품금액</p>
              <p className="priceNum">{getTotalPrice().toLocaleString()}원</p>
              <p className="priceText">배송비</p>
              <p className="deliveryNum">+0원</p>
              <div className="paymentBorderTwo">
                <div className="pay">
                  <p className="payMoney">결제예상금액</p>
                  <p className="lastNum">
                    {getTotalPrice().toLocaleString()}원
                  </p>
                </div>
              </div>
              <div className="payButton">
                <button
                  className={`paymentButton ${
                    isAnyProductSelected ? '' : 'disabled'
                  }`}
                  disabled={!isAnyProductSelected}
                >
                  {isAnyProductSelected
                    ? `${getTotalPrice().toLocaleString()}원 주문하기`
                    : '0원 주문하기'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Count;
