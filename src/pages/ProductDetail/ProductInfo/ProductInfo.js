import React from 'react';
import './ProductInfo.scss';
import Btn from './Btn/Btn';
class ProductInfo extends React.Component {
  render() {
    return (
      <div className="productInfoBox">
        <h1>{this.props.productData && this.props.productData.text}</h1>
        <Btn productId={this.props.productId} />
      </div>
    );
  }
}

export default ProductInfo;
