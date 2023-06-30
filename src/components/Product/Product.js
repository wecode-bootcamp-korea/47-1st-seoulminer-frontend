import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Product.scss';

const Product = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const { id, thumbnail_image, hover_image, name, price } = data;
  return (
    <div
      className="product"
      key={id}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Link to="./productDetail" style={{ textDecorationLine: 'none' }}>
        <div className="container">
          <div className="itemImgContainer">
            <img
              className="itemImg"
              src={isHover ? hover_image : thumbnail_image}
              alt="itemImg"
            />
          </div>
          <div className="text">
            <p className="title">{name}</p>
            <p className="price">{price.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
