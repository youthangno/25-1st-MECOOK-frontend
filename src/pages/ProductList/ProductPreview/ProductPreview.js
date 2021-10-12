import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  state = {
    isLiked: 0,
    likeCount: 0,
  };

  componentDidMount() {
    this.setState({
      isLiked: this.props.userLike === 1 ? true : false,
      likeCount: this.props.like,
    });
  }

  toggleBtnLike = () => {
    if (localStorage.getItem('token')) {
      this.setState({
        isLiked: !this.state.isLiked,
        likeCount: this.state.isLiked
          ? this.state.likeCount - 1
          : this.state.likeCount + 1,
      });
    } else {
      alert('로그인 해주십시오');
    }
  };

  render() {
    const { productId, mainImage, category, name, cookingTime, serving } =
      this.props;
    return (
      <div
        className="productPreviewContainer"
        onClick={() => this.props.goToDetail(productId)}
      >
        <img className="productPreviewImage" src={mainImage} alt="food" />
        <h3 className="productType">{category}</h3>
        <p className="productName">{name}</p>
        <div className="productInfo">
          <i className="far fa-clock"></i>
          <span>{cookingTime}</span>
          <i className="far fa-user"></i>
          <span>{serving}</span>
          <i
            className={`btnLike fa-heart ${this.state.isLiked ? 'fas' : 'far'}`}
            onClick={this.toggleBtnLike}
          ></i>
          <span>{this.state.likeCount}</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
