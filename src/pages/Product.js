import { Link } from 'react-router-dom';
import { useState } from 'react';

const Product = ({ data }) => {
  const [image, setImage] = useState(true);
  return (
    <div
      className="product"
      key={data?.id}
      onMouseOver={() => {
        setImage(!image);
      }}
      onMouseOut={() => {
        setImage(!image);
      }}
    >
      <Link to="./productDetail" style={{ textDecorationLine: 'none' }}>
        <div className="container">
          <div className="itemImg">
            <img className="itemImgOne" src={data?.imgOne} alt="itemImg" />
            <img
              className="itemImgTwo"
              src={data?.imgTwo}
              alt="itemImg"
              style={{ opacity: `${image ? '0' : '1'}` }}
            />
          </div>
          <div className="text">
            <p className="title">{data?.title}</p>
            <p className="price">{data?.price.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
