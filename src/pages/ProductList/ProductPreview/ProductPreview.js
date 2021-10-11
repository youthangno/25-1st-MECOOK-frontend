import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  state = {
    isLiked: false,
  };

  toggleBtnLike = () => {
    this.setState({ isLiked: !this.state.isLiked });

    // btnLike click 시 유저의 해당 상품 좋아요 정보 POST
    if (localStorage.getItem('token')) {
      fetch(`api주소`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: {
          userId: this.props.productId,
          productId: '',
        },
      })
        .then(res => res.json())
        .then(data => console.log(data));
    } else {
      alert('로그인을 해주세요');
    }
  };

  render() {
    const { mainImage, category, name, cookingTime, serving, like, userLike } =
      this.props;
    return (
      <div className="productPreviewContainer">
        <img className="productPreviewImage" src={mainImage} alt="food" />
        <h3 className="productType">{category}</h3>
        <p className="productName">{name}</p>
        <div className="productInfo">
          <i className="far fa-clock"></i>
          <span>{cookingTime}</span>
          <i className="far fa-user"></i>
          <span>{serving}</span>
          <i
            className={`btnLike fa-heart ${userLike ? 'fas' : 'far'}`}
            onClick={this.toggleBtnLike}
          ></i>
          <span>{like}</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
