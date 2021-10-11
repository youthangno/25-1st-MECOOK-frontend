import React from 'react';
import './ProductInfo.scss';
import Btn from './Btn/Btn';
class ProductInfo extends React.Component {
  render() {
    const dataList = this.props.dataList;
    return (
      <div className="productInfoBox">
        <h1>{dataList && dataList[0].text}</h1>
        <Btn />
      </div>
    );
  }
}

export default ProductInfo;
