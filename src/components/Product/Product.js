import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Product.scss';

const Product = ({ data, width, height }) => {
  const [isHover, setIsHover] = useState(false);
  const {
    productId,
    productThumbnailImage,
    productHoverImage,
    productName,
    productPrice,
  } = data;
  return (
    <div
      className="product"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Link to={`/productDetail/${productId}`} className="linkToProduct">
        <div className="container">
          <div className="itemImgContainer">
            <img
              className="itemImg"
              style={{
                width: width ? width : 300,
                height: height ? height : 300,
              }}
              src={isHover ? productHoverImage : productThumbnailImage}
              alt="itemImg"
            />
          </div>
          <div className="eachProductText">
            <p className="componentTitle">{productName}</p>
            <p className="price">{productPrice?.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
