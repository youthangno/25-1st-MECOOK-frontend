import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  render() {
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
          <img
            className="itemImage"
            src="images/ProductPreview/pet1.png"
            alt="food"
          />
          <div className="itemInfo">
            <h5 className="itemCategory">디저트</h5>
            <h4 className="itemName">바닐라 마카롱</h4>
            <h3 className="itemPrice">
              <i className="fas fa-won-sign"></i>3,900
            </h3>
          </div>
          <i className="btnDeleteCartItem far fa-trash-alt"></i>
        </label>
      </li>
    );
  }
}

export default CartItem;
