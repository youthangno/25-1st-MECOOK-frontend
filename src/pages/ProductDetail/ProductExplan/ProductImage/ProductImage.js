import React from 'react';
import './ProductImage.scss';

class ProductImage extends React.Component {
  render() {
    const { url, info } = this.props;
    console.log(info);
    return (
      <div className="image">
        <img src={url} alt="물만두" />
      </div>
    );
  }
}

export default ProductImage;
