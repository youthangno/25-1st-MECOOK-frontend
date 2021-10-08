import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    fetch('data/Cart/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ cartList: data }));
  }

  render() {
    return (
      <div className="cartContainer">
        <h1 className="cartTitle">Cart</h1>
        <ul className="cartList">
          {this.state.cartList.map(cartItem => {
            const { id, image, category, name, price } = cartItem;
            return (
              <CartItem
                key={id}
                image={image}
                category={category}
                name={name}
                price={price}
              />
            );
          })}
        </ul>
        <input className="checkAllBox" type="checkbox" name="checkAllBox" />
        <span className="checkAllLabel">전체선택</span>
        <div className="cartTotal">
          <p className="totalCount">
            TOTAL<span>1</span>
          </p>
          <p className="totalPrice">
            <i className="fas fa-won-sign"></i>
            5,300
          </p>
        </div>
        <button className="btnOrder">BUY NOW</button>
      </div>
    );
  }
}

export default Cart;
