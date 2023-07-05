import { useEffect, useState } from 'react';
import './Purchase.scss';

const Purchase = () => {
  const [inputValue, setInputValue] = useState({});
  const [checkboxValue, setCheckboxValue] = useState({});
  const [isAllValue, setIsAllValue] = useState({});
  const [isAll, setIsAll] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/data/OrderData.json')
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
    for (let i = 0; i < productData.length; i++) {
      let price = productData[i].price * productData[i].count;
      total = price + total;
    }
    return total;
  };

  const payPrice = (Number(lastPrice()) + 3000).toLocaleString();

  return (
    <div className="purchase">
      <div className="left">
        <p className="title">주문서</p>
        <div className="address">
          <p className="subtitle">배송지</p>
          <div className="border" />
          {DELIVARY_INFO.map(data => {
            return (
              <input
                key={data.id}
                name={data.name}
                placeholder={data.placeholder}
                onChange={handleInput}
              />
            );
          })}
        </div>
        <div className="products">
          <p className="subtitle">주문상품</p>
          <div className="border" />
          {productData.map(data => {
            return (
              <div className="product" key={data.id}>
                <p>{data.name}</p>
                <p>{data.count}개</p>
              </div>
            );
          })}
        </div>
        <div className="buy">
          <p className="subtitle">결제수단</p>
          <div className="border" />
          {TO_BUY.map(data => {
            return (
              <div className="howTo" key={data.id}>
                <input
                  className="radio"
                  type="radio"
                  id={data.id}
                  name={data.name}
                  onClick={handleBuyCheckbox}
                />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightBox">
        <div className="price">
          <p>주문 금액</p>
          <p> {Number(lastPrice()).toLocaleString()}원</p>
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
          {AGREEMENT_BUY.map(data => {
            return (
              <div className="container" key={data.id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={data.name}
                  checked={isAllValue[data.name]}
                  onChange={handleAllCheckbox}
                />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
        <button
          className="button"
          disabled={isValid ? false : true}
          style={{ opacity: `${isValid ? 1 : 0.5}` }}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          결제하기
        </button>
      </div>
      {isModalOpen && (
        <div className="modalBlack">
          <div className="modal">
            <div className="text">
              <p>상품 주문이 완료되었습니다.</p>
              <p>주문페이지로 넘어갑니다.</p>
            </div>
            <button
              className="ok"
              onClick={() => {
                setIsModalOpen(!isModalOpen);
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

// const PRODUCTS = [
//   { id: 1, name: '잘 붙는 스티커', count: 1 },
//   { id: 2, name: '딱딱한 지우개', count: 2 },
//   { id: 3, name: '향기없는 샴푸', count: 3 },
// ];

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
