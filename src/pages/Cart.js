// import React, { useEffect, useState } from 'react';
// import CartCheckBox from './CartCheckBox';
// // import CartCount from './CartCount';
// import './Cart.scss';

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   const [products, setProducts] = useState([]);

//   const price = 1;

//   const sendQuantityUpdate = (productId, quantityChange) => {
//     const updatedProduct = products.find(product => product.id === productId);
//     if (updatedProduct) {
//       const updatedQuantity = updatedProduct.quantity + quantityChange;
//     }
//     const getTotalPrice = () => {
//       return products.reduce(
//         (total, product) => total + product.quantity * price,
//         0
//       );
//     };
//   };

//   const isAnyProductSelected = products.some(product => product.quantity > 0);

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://10.58.52.145:3000/carts/list', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const result = await response.json();
//         if (Array.isArray(result.data)) {
//           setCartData(result.data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCartData();
//   }, []);

//   return (
//     <div className="cartContainer">
//       <div className="cartHeader">
//         <div className="orderStep">
//           <p className="cartText">장바구니</p>
//         </div>
//       </div>
//       <div className="cartWrapper">
//         <div className="cartContent">
//           <div className="checkboxHeader">
//             {cartData.length === 0 ? (
//               <div className="dataNone">
//                 <h2 className="cartTitle">앗!</h2>
//                 <div className="cartText">장바구니가 텅~</div>
//               </div>
//             ) : (
//               <div className="cartItems">
//                 {cartData.map(item => (
//                   <div key={item.cartId} className="cartItem">
//                     <CartCheckBox />
//                     <h3>{item.productName}</h3>

//                     <p>가격: {item.price}</p>
//                     <p>수량: {item.quantity}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="paymentArea">
//         <div className="paymentBorder">
//           <p className="price">총 상품금액</p>
//           <p className="priceNum">{getTotalPrice().toLocaleString()}원</p>
//           <p className="priceText">배송비</p>
//           <p className="deliveryNum">+0원</p>
//           <div className="paymentBorderTwo">
//             <div className="pay">
//               <p className="payMoney">결제예상금액</p>
//               <p className="lastNum">{getTotalPrice().toLocaleString()}원</p>
//             </div>
//           </div>
//           <div className="payButton">
//             <button
//               className={`paymentButton ${
//                 isAnyProductSelected ? '' : 'disabled'
//               }`}
//               disabled={!isAnyProductSelected}
//             >
//               {isAnyProductSelected
//                 ? `${getTotalPrice().toLocaleString()}원 주문하기`
//                 : '0원 주문하기'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
