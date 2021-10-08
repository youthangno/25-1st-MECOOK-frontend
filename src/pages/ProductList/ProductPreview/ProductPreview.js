import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  render() {
    const { id, image, type, name, cookingTime, availPeople, like } =
      this.props;
    return (
      <li className="food" key={id}>
        <div className="productPreviewContainer">
          <img className="productPreviewImage" src={image} alt="food" />
          <h3 className="productType">{type}</h3>
          <p className="productName">{name}</p>
          <div className="productInfo">
            <i className="far fa-clock"></i>
            <span>{cookingTime}</span>
            <i className="far fa-user"></i>
            <span>{availPeople}</span>
            <i className="far fa-heart greenHeart"></i>
            <span>{like}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductPreview;
