import React from 'react';
import './ProductCountBtn.scss';

class ProductCountBtn extends React.Component {
  render() {
    return (
      <div className="productCountBtn">
        수량선택
        <div className="inputBox">
          <input className="quantity" type="text" placeholder="0" />
        </div>
        <div className="button">
          <button>
            <i class="fas fa-plus-square"></i>
          </button>
          <button>
            <i class="fas fa-minus-square"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCountBtn;
