import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import './ProductDetail.scss';
import ProductInfo from './ProductInfo/ProductInfo';

class ProductDetail extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="ProductDetail">
          ProductDetail
          <ProductImage />
          <ProductInfo />
        </div>
        ;
      </>
    );
  }
}

export default ProductDetail;
