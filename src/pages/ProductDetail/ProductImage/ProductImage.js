import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import './ProductImage.scss';

class ProductImage extends React.Component {
  render() {
    return (
      <div>
        <p>ProductImage</p>
        <ProductExplan />
      </div>
    );
  }
}

export default ProductImage;
