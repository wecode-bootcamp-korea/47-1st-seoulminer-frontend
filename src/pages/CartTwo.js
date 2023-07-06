import { useEffect, useState } from 'react';
import CartComponent from '../components/CartComponent';
import './CartTwo.scss';

const CartTwo = () => {
  const [cartDatas, setCartData] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    fetch('/data/OrderData.json')
      .then(response => response.json())
      .then(result => {
        setCartData(result);
        setCheckBoxes(Array(result.length).fill(false));
      });
  }, []);

  const handleDeleteSelected = () => {
    const selectedProductIds = cartDatas
      .filter((cartData, index) => checkBoxes[index])
      .map(cartData => cartData.productId);

    const updatedCartData = cartDatas.filter(
      cartData => !selectedProductIds.includes(cartData.productId)
    );

    setCartData(updatedCartData);
    setCheckBoxes(Array(updatedCartData.length).fill(false));
  };

  const handleCheckAll = () => {
    setCheckedAll(!checkedAll);
    setCheckBoxes(Array(cartDatas.length).fill(!checkedAll));
  };

  return (
    <div className="cartTwo">
      {cartDatas.length === 0 ? (
        <div className="dataNone">
          <h2 className="title">앗!</h2>
          <div className="text">장바구니가 텅~</div>
        </div>
      ) : (
        <>
          <div className="left">
            <p className="cartTitle">장바구니</p>
            <div className="top">
              <div className="all">
                <input
                  className="checkboxOne"
                  type="checkbox"
                  checked={checkedAll}
                  onChange={handleCheckAll}
                />
                <p>전체선택</p>
              </div>
              <button onClick={handleDeleteSelected}>선택삭제</button>
            </div>
            <div className="allBorder">
              <div className="border" />
              <div className="cartMapData">
                {cartDatas?.map((cartData, index) => (
                  <CartComponent
                    key={cartData.productId}
                    cartData={cartData}
                    checked={checkBoxes[index]}
                    setChecked={isChecked => {
                      const updatedCheckBoxes = [...checkBoxes];
                      updatedCheckBoxes[index] = isChecked;
                      setCheckBoxes(updatedCheckBoxes);
                    }}
                  />
                ))}
              </div>
              <div className="border" />
            </div>
          </div>
          <div className="purchaseRightBox">
            <div className="price">
              <p>주문 금액</p>
              <p> 원</p>
            </div>
            <div className="price">
              <p>배송비</p>
              <p>+ 3,000원</p>
            </div>
            <div className="border" />
            <div className="price">
              <p>총 결제금액</p>
              <p>원</p>
            </div>
            <button className="button">결제하기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartTwo;
