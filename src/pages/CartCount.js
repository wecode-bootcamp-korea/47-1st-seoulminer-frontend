import React, { useState } from 'react';

const CartCount = () => {
  const [products, setProducts] = useState([]);

  const price = 1; // 임의의 가격 설정

  const handleIncrease = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    sendQuantityUpdate(productId, 1); // 수량 변경 시 서버 요청 보냄
  };

  const handleDecrease = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    sendQuantityUpdate(productId, -1); // 수량 변경 시 서버 요청 보냄
  };

  const sendQuantityUpdate = (productId, quantityChange) => {
    const updatedProduct = products.find(product => product.id === productId);
    if (updatedProduct) {
      const updatedQuantity = updatedProduct.quantity + quantityChange;

      fetch(`/api/cart/${productId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: updatedQuantity }),
      })
        .then(response => response.json())
        .then(result => {
          const updatedCartData = result.data;
          setProducts(updatedCartData);
        });
    }
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

export default CartCount;
