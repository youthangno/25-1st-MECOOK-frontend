import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="cartContainer">
        <h1 className="cartTitle">Cart</h1>
        <ul className="cartList">
          <CartItem />
        </ul>
      </div>
    );
  }
}

export default Cart;
