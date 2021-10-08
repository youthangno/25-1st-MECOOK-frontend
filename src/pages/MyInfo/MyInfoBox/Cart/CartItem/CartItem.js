import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  render() {
    const { image, category, name, price } = this.props;
    return (
      <li className="cartItemContainer">
        <input
          id="item1"
          className="itemCheckbox"
          type="checkbox"
          name="checkItem"
          checked={false}
          readOnly={false}
        />
        <label className="cartItem" htmlFor="item1">
          <img className="itemImage" src={image} alt="food" />
          <div className="itemInfo">
            <h5 className="itemCategory">{category}</h5>
            <h4 className="itemName">{name}</h4>
            <h3 className="itemPrice">
              <i className="fas fa-won-sign"></i>
              {price}
            </h3>
          </div>
          <i className="btnDeleteCartItem far fa-trash-alt"></i>
        </label>
      </li>
    );
  }
}

export default CartItem;
