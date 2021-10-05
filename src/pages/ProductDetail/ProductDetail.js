import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import './ProductDetail.scss';
import ProductInfo from './ProductInfo/ProductInfo';

class ProductDetail extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="ProductDetail">
          ProductDetail
          <ProductExplan />
          <ProductInfo />
        </div>
        ;
      </>
    );
  }
}

export default ProductDetail;
