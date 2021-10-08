import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  state = {
    isLiked: false,
  };

  // 상품 리스트 불러올때 상품별 좋아요 개수 GET
  // componentDidMount() {
  //   fetch(``, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Authorization: localStorage.getItem('userToken'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }

  toggleBtnLike = () => {
    this.setState({ isLiked: !this.state.isLiked });

    // btnLike click 시 유저의 해당 상품 좋아요 정보 POST
    // fetch(``, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Authorization: localStorage.getItem('userToken'),
    //   },
    //   body: {
    //     userId: this.props.productId,
    //     productId: '',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  render() {
    const { mainImage, category, name, cookingTime, serving, like } =
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
            className={`btnLike fa-heart ${this.state.isLiked ? 'fas' : 'far'}`}
            onClick={this.toggleBtnLike}
          ></i>
          <span>{like}</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
