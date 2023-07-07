import CartCount from './Count/CartCount';
import './CartComponent.scss';

const CartComponent = ({ cartData, number, setNumber }) => {
  const { productName, cartId, price } = cartData;

  return (
    <div className="cartComponent">
      <div className="checkAndName">
        <input className="checkboxOne" type="checkbox" id={cartId} />
        <p>{productName}</p>
      </div>
      <div className="right ">
        <CartCount number={number} setNumber={setNumber} cartId={cartId} />
        <p>{price}원</p>
      </div>
    </div>
  );
};

export default CartComponent;
