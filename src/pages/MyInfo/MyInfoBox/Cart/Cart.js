import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    cartList: [],
    isAllChecked: false,
  };

  componentDidMount() {
    fetch('data/Cart/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ cartList: data }));
  }

  toggleAllChecked = () => {
    this.setState({ isAllChecked: !this.state.isAllChecked });
  };

  deleteCartItem = itemId => {
    const deletedCartList = this.state.cartList.filter(
      item => item.id !== itemId
    );

    this.setState({ cartList: deletedCartList });
  };

  render() {
    let totalPrice = 0;
    const prices = this.state.cartList.map(item => Number(item.price));
    prices.forEach(item => (totalPrice += item));

    return (
      <div className="cartContainer">
        <h1 className="cartTitle">Cart</h1>
        <ul className="cartList">
          {this.state.cartList.map(cartItem => {
            const { id, image, category, name, price } = cartItem;
            return (
              <CartItem
                key={id}
                id={id}
                image={image}
                category={category}
                name={name}
                price={price}
                isAllChecked={this.state.isAllChecked ? true : false}
                deleteCartItem={this.deleteCartItem}
              />
            );
          })}
        </ul>
        <input
          className="checkAllBox"
          type="checkbox"
          name="checkAllBox"
          checked={this.state.isAllChecked}
          onChange={this.toggleAllChecked}
        />
        <span className="checkAllLabel">전체선택</span>
        <div className="cartTotal">
          <p className="totalCount">
            TOTAL<span>{this.state.cartList.length}</span>
          </p>
          <p className="totalPrice">
            <i className="fas fa-won-sign"></i>
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <button className="btnOrder">BUY NOW</button>
      </div>
    );
  }
}

export default Cart;
