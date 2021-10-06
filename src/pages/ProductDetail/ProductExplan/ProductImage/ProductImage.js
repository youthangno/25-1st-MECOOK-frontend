import React from 'react';
import './ProductImage.scss';

class ProductImage extends React.Component {
  render() {
    const { url, info } = this.props;
    return (
      <div className="productImage">
        <img src={url} alt="물만두" key={info} />
      </div>
    );
  }
}

export default ProductImage;
