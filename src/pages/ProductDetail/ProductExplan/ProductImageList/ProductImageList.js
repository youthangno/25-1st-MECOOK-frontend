import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import './ProductImageList.scss';

class ProductImageList extends React.Component {
  render() {
    const { productData } = this.props;
    return (
      <div>
        {productData.map((data, index) => {
          return <ProductImage url={data.url} info={data.info} key={index} />;
        })}
      </div>
    );
  }
}

export default ProductImageList;
