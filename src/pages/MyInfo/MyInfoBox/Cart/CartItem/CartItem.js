import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  render() {
    const {
      id,
      image,
      category,
      name,
      price,
      isChecked,
      handleItemCheck,
      deleteCartItem,
    } = this.props;
    return (
      <li className="cartItemContainer">
        <input
          className="itemCheckbox"
          type="checkbox"
          name="checkItem"
          checked={isChecked}
          onChange={() => handleItemCheck(id)}
        />
        <label className="cartItem">
          <img className="itemImage" src={image} alt="food" />
          <div className="itemInfo">
            <h5 className="itemCategory">{category}</h5>
            <h4 className="itemName">{name}</h4>
            <h3 className="itemPrice">
              <i className="fas fa-won-sign"></i>
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h3>
          </div>
          <i
            className="btnDeleteCartItem far fa-trash-alt"
            onClick={() => deleteCartItem(id)}
          ></i>
        </label>
      </li>
    );
  }
}

export default CartItem;
