import './Purchase.scss';

const Purchase = () => {
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
              />
            );
          })}
        </div>
        <div className="products">
          <p className="subtitle">주문상품</p>
          <div className="border" />
          {PRODUCTS.map(data => {
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
                <input type="checkbox" name={data.name} />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="modal">
        <div className="price">
          <p>주문 금액</p>
          <p>30000원</p>
        </div>
        <div className="price">
          <p>배송비</p>
          <p>+3000원</p>
        </div>
        <div className="border" />
        <div className="price">
          <p>총 결제금액</p>
          <p>33000원</p>
        </div>
        <div className="border" />
        <div className="agremment">
          {AGREEMENT_BUY.map(data => {
            return (
              <div className="container" key={data.id}>
                <input className="checkbox" type="checkbox" name={data.name} />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
        <button className="button">결제하기</button>
      </div>
    </div>
  );
};

export default Purchase;

const DELIVARY_INFO = [
  { id: 1, name: 'name', placeholder: '이름' },
  { id: 2, name: 'phone', placeholder: '전화번호' },
  { id: 3, name: 'address', placeholder: '주소' },
];

const PRODUCTS = [
  { id: 1, name: '잘 붙는 스티커', count: 1 },
  { id: 2, name: '딱딱한 지우개', count: 2 },
  { id: 3, name: '향기없는 샴푸', count: 3 },
];

const TO_BUY = [
  { id: 1, name: 'card', text: '신용카드/체크카드' },
  { id: 2, name: 'pay', text: 'SNS 페이' },
  { id: 3, name: 'point', text: 'POINT' },
];

const AGREEMENT_BUY = [
  { id: 1, name: 'all', text: '전체동의' },
  {
    id: 2,
    name: 'one',
    text: '(필수) 구매할 상품의 결제정보를(상품명, 상품가격) 확인하였으며 구매진행에 동의합니다.',
  },
  { id: 3, name: 'two', text: '(필수) 개인정보 수집 및 이용에 동의합니다.' },
];
