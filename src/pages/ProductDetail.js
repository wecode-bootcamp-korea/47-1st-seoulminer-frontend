import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import './ProductDetail.scss';

const ProductDetail = () => {
  const name = '글림체 자음모음 붙임딱지';
  const price = 3500;
  const number = 1;

  const [carouselDatas, setCarouselData] = useState([]);

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setCarouselData(data));
  }, []);

  return (
    <div className="productDetail">
      <div className="top">
        <div className="title">
          <p className="titleName">{name}</p>
          <p>{price.toLocaleString()}원</p>
        </div>
        <div className="fullImage">
          <button className="next">next</button>
          <div className="image">
            <div className="productImage">
              <img
                className="productImg"
                alt="product1"
                src="./images/IMG_7631 2.jpg"
              />
              <img
                className="productImg"
                alt="product2"
                src="./images/IMG_7632.jpeg"
              />
            </div>
          </div>
          <button className="next">next</button>
        </div>
        <div className="right">
          <div className="border" />
          <div className="delivery">
            <p className="delivaryTitle">배송정보</p>
            <p>3,000원 (30,000원 이상 구매 시 무료)</p>
            <p>오후 1시 당일배송마감</p>
          </div>
          <div className="border" />
          <div className="box">
            <p>{name}</p>
            <div className="price">
              <div className="countButton">
                <button className="count">-</button>
                <p className="number">{number}</p>
                <button className="count">+</button>
              </div>
              <p>{price.toLocaleString()}원</p>
            </div>
          </div>
          <div className="totalPrice">
            <p>총 금액</p>
            <p className="total">{(price * number).toLocaleString()}원</p>
          </div>
          <div className="getButton">
            <button className="cart">장바구니</button>
            <button className="get">바로 구매하기</button>
          </div>
        </div>
      </div>
      <div className="border" />
      <div className="recommendProducts">
        <h3 className="recommend">이건 어때요?</h3>
        <div className="products">
          {carouselDatas.map(data => {
            return (
              <Product data={data} key={data.id} width={200} height={200} />
            );
          })}
        </div>
      </div>
      <div className="border" />
      <div className="detail">
        <p>상품정보</p>
        <p className="gray">|</p>
        <p>기본정보</p>
        <p className="gray">|</p>
        <p>상품후기</p>
      </div>
      <div className="border" />

      <p className="wrap">상세설명</p>

      <div className="tableFull">
        <p className="tableName">상품상세정보</p>
        <div className="tables">
          {DETAIL_INFO.map(data => {
            return (
              <div className="table" key={data.id}>
                <div className="name">{data.name}</div>
                <div className="right">{data.explanation}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const DETAIL_INFO = [
  {
    id: 1,
    name: '제품명',
    explanation: '상품상세설명참조',
  },
  {
    id: 2,
    name: '크기',
    explanation: '상품상세설명참조',
  },
  {
    id: 3,
    name: '제조사 및 수입자명',
    explanation: '상품상세설명참조',
  },
  {
    id: 4,
    name: '제조국',
    explanation: '상품상세설명참조',
  },
  {
    id: 5,
    name: '사용연령',
    explanation: '상품상세설명참조',
  },
];
