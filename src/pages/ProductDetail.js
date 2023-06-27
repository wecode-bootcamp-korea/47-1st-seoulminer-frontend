import './ProductDetail.scss';

const ProductDetail = () => {
  const name = '글림체 자음모음 붙임딱지';
  const price = 3500;
  const number = 1;
  return (
    <div className="productDetail">
      <div className="top">
        <div className="title">
          <h2>{name}</h2>
          <p>{price.toLocaleString()}원</p>
        </div>
        <div className="fullImage">
          <button />
          <div className="image">
            <div className="productImage">
              <img alt="product1" src="./images/IMG_7632.jpg" />
              <img alt="product2" src="./images/cat.jpeg" />
            </div>
            <div className="spot">
              <span>﹒</span>
              <span>﹒</span>
            </div>
          </div>
          <button />
        </div>
        <div className="right">
          <div className="border" />
          <div className="delivery">
            <p>배송정보</p>
            <p>3,000원 (30,000원 이상 구매 시 무료)</p>
            <p>오후 1시 당일배송마감</p>
          </div>
          <div className="border" />
          <div className="pinkbox">
            <p>{name}</p>
            <div className="price">
              <div className="countButton">
                <button>-</button>
                <p>{number}</p>
                <button>+</button>
              </div>
              <p>{price.toLocaleString()}원</p>
            </div>
          </div>
          <div className="totalPrice">
            <p>총 금액</p>
            <p>{(price * number).toLocaleString()}원</p>
          </div>
          <div className="getButton">
            <button>장바구니</button>
            <button>바로 구매하기</button>
          </div>
        </div>
      </div>
      <div className="border" />
      <div className="detail">
        <p>상품정보</p>
        <p>|</p>
        <p>기본정보</p>
        <p>|</p>
        <p>상품후기</p>
      </div>
      <div className="border" />
      <div className="table">
        <h3>상품상세정보</h3>
        <div className="table">표 들어갈 자리</div>
      </div>
    </div>
  );
};

export default ProductDetail;
