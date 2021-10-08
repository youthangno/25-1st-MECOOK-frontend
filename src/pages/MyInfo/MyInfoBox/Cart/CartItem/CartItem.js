import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  state = {
    isChecked: false,
  };

  toggleIsChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isAllChecked !== prevProps.isAllChecked) {
      this.setState({ isChecked: this.props.isAllChecked });
    }
  }

  render() {
    const { id, image, category, name, price, deleteCartItem } = this.props;
    return (
      <li className="cartItemContainer">
        <input
          className="itemCheckbox"
          type="checkbox"
          name="checkItem"
          checked={this.state.isChecked}
          onChange={this.toggleIsChecked}
        />
        <label className="cartItem">
          <img className="itemImage" src={image} alt="food" />
          <div className="itemInfo">
            <h5 className="itemCategory">{category}</h5>
            <h4 className="itemName">{name}</h4>
            <h3 className="itemPrice">
              <i className="fas fa-won-sign"></i>
              {price}
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
