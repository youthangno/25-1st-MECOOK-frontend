import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  render() {
    // const { image, type, name, cookingTime, availPeople, like } = this.props;
    return (
      <div className="productPreviewContainer">
        <img
          className="productPreviewImage"
          src="images/Main/chinese.jpg"
          alt="food"
        />
        <h3 className="productType">국/찌개/육수</h3>
        <p className="productName">진한 우보탕</p>
        <div className="productInfo">
          <i className="far fa-clock"></i>
          <span>5분</span>
          <i className="far fa-user"></i>
          <span>1~2인분</span>
          <i className="far fa-heart greenHeart"></i>
          <span>134</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
