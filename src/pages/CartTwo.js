import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../components/CartComponent';
import './CartTwo.scss';

const CartTwo = () => {
  const [number, setNumber] = useState(1);
  const [cartDatas, setCartData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const eachTotalPrice = number * cartDatas.productPrice;

  let lastOfLastPrice = 0;

  const allPrice = () => {
    for (let i = 0; i < cartDatas.length; i++) {
      const each = cartDatas[i].quantity * cartDatas[i].price;
      lastOfLastPrice += each;
    }
    return lastOfLastPrice;
  };

  useEffect(() => {
    fetch('/data/OrderData.json')
      // fetch('http://10.58.52.175:3000/carts/list')
      .then(response => response.json())
      .then(result => setCartData(result));
  }, []);

  const postUserData = () => {
    fetch('http://10.58.52.175:3000/orders/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        headers: { Authorization: `Bearer ${token}` },
      },
      body: JSON.stringify({
        totalPrice: 'asd',
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'CREATE_ORDER_SUCCESS') {
          navigate('purchase');
        } else if (data.message === 'INVALID_TOKEN') {
          alert('토큰값 이상');
        }
      });
  };

  const deleteAll = () => {
    fetch('http://10.58.52.175:3000/carts/all', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        headers: { Authorization: `Bearer ${token}` },
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'TOKEN_NOT_FOUND') {
          alert('토큰 확인 실패 시 (토큰값이 request안에 없음)');
        } else if (data.message === 'USER_NOT_FOUND') {
          alert('토큰 확인 실패 시  (토큰값에 해당하는 유저가 존재하지 않음)');
        } else if (data.message === 'INVALID_TOKEN') {
          alert('토큰값 이상');
        } else if (data.message === 'KEY_ERROR') {
          alert('키에러');
        }
      });
  };

  const deleteItem = () => {
    fetch(`http://10.58.52.175:3000/carts/item/${'cartId'}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        headers: { Authorization: `Bearer ${token}` },
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'ITEM_DELETE_SUCCESS') {
          alert('상품 삭제 완료');
        } else if (data.message === 'INVALID_TOKEN') {
          alert('토큰값 이상');
        }
      });
  };

  const patchCart = () => {
    fetch('http://10.58.52.175:3000/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        headers: { Authorization: `Bearer ${token}` },
      },
      body: JSON.stringify({
        productId: 'd',
        productOptionId: 'd',
        quantity: 'd',
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'CART_UPDATE_SUCCESS') {
          alert('상품 추가 성공');
        } else if (data.message === 'TOKEN_NOT_FOUND') {
          alert('토큰 확인 실패 시 (토큰값이 request안에 없음)');
        } else if (data.message === 'USER_NOT_FOUND') {
          alert('토큰 확인 실패 시  (토큰값에 해당하는 유저가 존재하지 않음)');
        } else if (data.message === 'INVALID_TOKEN') {
          alert(' 토큰 확인 실패 시  (토큰값이 올바르지 않음)');
        } else if (data.message === 'KEY_ERROR') {
          alert('키에러');
        } else if (data.message === 'PRODUCT_OUT_OF_STOCK') {
          alert(' 상품 추가 실패 시 (inventory = 0)');
        } else if (data.message === 'QUANTITY_EXCEEDS_INVENTORY') {
          alert('상품 추가 실패 시 (quantity > inventory)');
        } else if (data.message === 'message": "QUANTITY_CANNOT_BE_0') {
          alert('상품 추가 실패 시 (quantity < 0)');
        }
      });
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
                <input type="checkbox" />
                <p>전체선택</p>
              </div>
              <button onClick={deleteAll}>선택삭제</button>
            </div>
            <div className="allBorder">
              <div className="border" />
              <div className="cartMapData">
                {cartDatas?.map(cartData => {
                  return (
                    <CartComponent
                      key={cartData.cartId}
                      cartData={cartData}
                      number={number}
                      setNumber={setNumber}
                      eachTotalPrice={eachTotalPrice}
                    />
                  );
                })}
              </div>
              <div className="border" />
            </div>
          </div>
          <div className="purchaseRightBox">
            <div className="price">
              <p>주문 금액</p>
              <p> {allPrice().toLocaleString()}원</p>
            </div>
            <div className="price">
              <p>배송비</p>
              <p>+ 3,000원</p>
            </div>
            <div className="border" />
            <div className="price">
              <p>총 결제금액</p>
              <p>{Number(allPrice()).toLocaleString()}원</p>
            </div>
            <button className="button" onClick={(postUserData, deleteItem)}>
              결제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartTwo;
