import { Link } from 'react-router-dom';
import { useState } from 'react';

const Product = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="product"
      key={data.id}
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
              src={isHover ? data.hover_image : data.thumbnail_image}
              alt="itemImg"
            />
          </div>
          <div className="text">
            <p className="title">{data.name}</p>
            <p className="price">{data.price.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
