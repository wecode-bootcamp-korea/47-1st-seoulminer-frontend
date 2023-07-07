import { useEffect, useState } from 'react';
import './Purchase.scss';

const Purchase = () => {
  const a = localStorage.getItem('item');
  const [inputValue, setInputValue] = useState({});
  const [checkboxValue, setCheckboxValue] = useState({});
  const [isAllValue, setIsAllValue] = useState({});
  const [isAll, setIsAll] = useState(false);
  const [productDatas, setProductData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const parsedA = JSON.parse(a);
  const conditon = a === null;

  useEffect(() => {
    fetch('http://10.58.52.243:3000/carts/list')
      .then(response => response.json())
      .then(result => setProductData(result));
  }, []);
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleBuyCheckbox = e => {
    const { id, checked } = e.target;
    setCheckboxValue({ ...checkboxValue, [id]: checked });
  };

  const handleAllCheckbox = e => {
    const { name, checked } = e.target;
    setIsAllValue({ ...isAllValue, [name]: checked });
  };

  const allChecked = e => {
    const { checked } = e.target;
    setIsAll(prev => !prev);

    let checkedObj = {};

    for (let i = 0; i <= AGREEMENT_BUY.length - 1; i++) {
      checkedObj = { ...checkedObj, [AGREEMENT_BUY[i].name]: checked };
    }
    setIsAllValue(checkedObj);
  };

  const isAllChecked = Object.values(isAllValue).filter(el => el === true);

  useEffect(() => {
    setIsAll(isAllChecked.length === 2);
  }, [isAllChecked]);

  const isValid =
    inputValue?.name?.length > 0 &&
    inputValue?.phone?.length > 0 &&
    inputValue?.address?.length > 0 &&
    isAll === true &&
    checkboxValue['1'] === true;

  const lastPrice = () => {
    let total = 0;
    for (let i = 0; i < productDatas.length; i++) {
      let price = productDatas[i].productPrice * productDatas[i].productCount;
      total = price + total;
    }
    return total;
  };

  const beforePrice = conditon
    ? Number(lastPrice()).toLocaleString()
    : (parsedA.price * parsedA.number).toLocaleString();
  const payPrice = conditon
    ? (Number(lastPrice()) + 3000).toLocaleString()
    : (parsedA.price * parsedA.number + 3000).toLocaleString();

  const goToPay = () => {
    localStorage.removeItem('item');
    // localStorage.removeItem('name');
    // localStorage.removeItem('number');
    // localStorage.removeItem('price');
    setIsModalOpen(true);
  };

  return (
    <div className="purchase">
      <div className="left">
        <p className="purchaseTitle">주문서</p>
        <div className="address">
          <p className="subtitle">배송지</p>
          <div className="border" />
          {DELIVARY_INFO.map(delivaryData => {
            return (
              <input
                key={delivaryData.id}
                name={delivaryData.name}
                placeholder={delivaryData.placeholder}
                onChange={handleInput}
              />
            );
          })}
        </div>
        <div className="purchaseProducts">
          <p className="subtitle">주문상품</p>
          <div className="border" />
          {conditon ? (
            productDatas.map(productData => {
              const { productId, productName, productCount } = productData;
              return (
                <div className="purchaseProduct" key={productId}>
                  <p>{conditon ? productName : parsedA.name}</p>
                  <p>{conditon ? productCount : parsedA.number}개</p>
                </div>
              );
            })
          ) : (
            <div className="purchaseProduct">
              <p>{parsedA.name}</p>
              <p>{parsedA.number}개</p>
            </div>
          )}
        </div>
        <div className="buy">
          <p className="subtitle">결제수단</p>
          <div className="border" />
          {TO_BUY.map(buyData => {
            return (
              <div className="howTo" key={buyData.id}>
                <input
                  className="radio"
                  type="radio"
                  id={buyData.id}
                  name={buyData.name}
                  onClick={handleBuyCheckbox}
                />
                <p>{buyData.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="purchaseRightBox">
        <div className="price">
          <p>주문 금액</p>
          <p> {beforePrice}원</p>
        </div>
        <div className="price">
          <p>배송비</p>
          <p>+ 3,000원</p>
        </div>
        <div className="border" />
        <div className="price">
          <p>총 결제금액</p>
          <p>{payPrice}원</p>
        </div>
        <div className="border" />
        <div className="agremment">
          <div className="container">
            <input
              className="checkbox"
              type="checkbox"
              name="all"
              checked={isAll}
              onClick={allChecked}
            />
            <p>전체동의</p>
          </div>
          {AGREEMENT_BUY.map(areementData => {
            return (
              <div className="container" key={areementData.id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={areementData.name}
                  checked={isAllValue[areementData.name]}
                  onChange={handleAllCheckbox}
                />
                <p>{areementData.text}</p>
              </div>
            );
          })}
        </div>
        <button
          className="button"
          disabled={!isValid}
          style={{ opacity: `${isValid ? 1 : 0.5}` }}
          onClick={goToPay}
        >
          결제하기
        </button>
      </div>
      {isModalOpen && (
        <div className="modalBlack">
          <div className="purchaseModal">
            <div className="purchaseModalText">
              <p>상품 주문이 완료되었습니다.</p>
              <p>주문페이지로 넘어갑니다.</p>
            </div>
            <button
              className="ok"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;

const DELIVARY_INFO = [
  { id: 1, name: 'name', placeholder: '이름' },
  { id: 2, name: 'phone', placeholder: '전화번호' },
  { id: 3, name: 'address', placeholder: '주소' },
];

const TO_BUY = [
  { id: 1, name: 'pay', text: '신용카드/체크카드' },
  { id: 2, name: 'pay', text: 'SNS 페이' },
  { id: 3, name: 'pay', text: 'POINT' },
];

const AGREEMENT_BUY = [
  {
    id: 1,
    name: 'one',
    text: '(필수) 구매할 상품의 결제정보를(상품명, 상품가격) 확인하였으며 구매진행에 동의합니다.',
  },
  { id: 2, name: 'two', text: '(필수) 개인정보 수집 및 이용에 동의합니다.' },
];
