import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  state = {
    isLiked: 0,
    likeCount: 0,
  };

  componentDidMount() {
    this.setState({
      isLiked: this.props.userLike === 1 ? 1 : 0,
      likeCount: this.props.like,
    });
  }

  toggleBtnLike = () => {
    if (this.state.isLiked === 1) {
      this.setState({ likeCount: this.state.likeCount - 1 });
    } else {
      this.setState({ likeCount: this.state.likeCount + 1 });
    }

    const TOKEN = localStorage.getItem('token');

    if (TOKEN) {
      // 좋아요 눌렀을 때 / 취소했을 때 POST로 API 통신
      this.setState({ isLiked: !this.state.isLiked });

      fetch('http://192.168.0.11:8000/like/user', {
        method: 'POST',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24',
        },
        body: JSON.stringify({
          user: '1',
          product: this.props.productId,
        }),
      })
        .then(res => res.json())
        .then(data => console.log(data));
    } else {
      alert('로그인한 사용자만 이용할 수 있는 서비스입니다.');
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
