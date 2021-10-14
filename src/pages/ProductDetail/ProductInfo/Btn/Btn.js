import React from 'react';
import './Btn.scss';
import LikeBtn from './LikeBtn/LikeBtn';
import ProductCountBtn from './ProductCountBtn/ProductCountBtn';

class Btn extends React.Component {
  render() {
    return (
      <div className="btn">
        <LikeBtn
          productId={this.props.productId}
          productResult={this.props.productResult}
        />
        <ProductCountBtn />
      </div>
    );
  }
}

export default Btn;
