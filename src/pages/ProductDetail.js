import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import RegularInfo from '../components/RegularInfo';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [carouselDatas, setCarouselData] = useState([]);
  const [currentTab, setCurrentTab] = useState('First');

  useEffect(() => {
    fetch('./data/MainData.json')
      .then(response => response.json())
      .then(data => setCarouselData(data));
  }, []);

  return (
    <div className="productDetail">
      <div className="top">
        <div className="title">
          <p className="titleName">{product[0]?.productName}</p>
          <p>{price}원</p>
        </div>
        <div className="fullImage">
          <button className="next">next</button>
          <div className="image">
            <div className="allImage">
              <img
                className="tumbnailImg"
                alt="product1"
                src={product[0]?.productThumbnailImage}
              />
              <img
                className="hoverImg"
                style={{ opacity: imgChange ? 1 : 0 }}
                alt="product2"
                src={product[0]?.productHoverImage}
              />
            </div>
          </div>
          <button
            className="next"
            onClick={() => {
              setImgChange(!imgChange);
            }}
          >
            next
          </button>
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
            <p>{product[0].productName}</p>
            <div className="price">
              <div className="countButton">
                <Count number={number} setNumber={setNumber} />
              </div>
              <p>{price}원</p>
            </div>
          </div>
          <div className="totalPrice">
            <p>총 금액</p>
            <p className="total">{totalPrice}원</p>
          </div>
          <div className="getButton">
            <button className="cart" onClick={() => goToCart()}>
              장바구니
            </button>
            <button
              className="get"
              onClick={() => {
                goToBuy();
              }}
            >
              바로 구매하기
            </button>
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
        <button className="detailBtn" onClick={() => setCurrentTab('First')}>
          상품정보
        </button>
        <p className="gray">|</p>
        <button className="detailBtn" onClick={() => setCurrentTab('Second')}>
          기본정보
        </button>
        <p className="gray">|</p>
        <button className="detailBtn" onClick={() => setCurrentTab('Third')}>
          상품후기
        </button>
      </div>
      <div className="border" />
      <div className="contents">{MAPPING_OBJ[currentTab]}</div>
    </div>
  );
};

export default ProductDetail;

const MAPPING_OBJ = {
  First: <p className="wrap">상세설명</p>,
  Second: <RegularInfo />,
  Third: <p className="non">앗!! 후기가 없어요 ㅠㅠ</p>,
};
