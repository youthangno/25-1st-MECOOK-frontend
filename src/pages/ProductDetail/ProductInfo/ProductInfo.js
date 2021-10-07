import React from 'react';
import './ProductInfo.scss';
import Btn from './Btn/Btn';
class ProductInfo extends React.Component {
  render() {
    const { title } = this.props.dataList;
    return (
      <div className="productInfoBox">
        <h1>{title}</h1>
        <Btn />
      </div>
    );
  }
}

export default ProductInfo;
