import React from 'react';
import './LikeBtn.scss';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likeCount: '',
      isToggleOn: 0,
    };
  }

  handleLikeBtn = () => {
    const TOKEN = localStorage.getItem('token');
    fetch('https://f960-211-106-114-186.ngrok.io/like/user', {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        product: this.props.productId,
      }),
    });

    this.setState({
      isToggleOn: !this.state.isToggleOn,
      likeCount: this.state.isToggleOn
        ? this.props.productResult.like + 1
        : this.props.productResult.like - 1,
    });
  };

  // componentDidMount() {
  //   fetch(
  //     `https://f960-211-106-114-186.ngrok.io/product/?product=${this.props.productId}&detail=1`,
  //     {
  //       method: 'GET',
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         likeCount: data,
  //       });
  //     });
  // }

  render() {
    const { isToggleOn } = this.state;
    return (
      <button className="likeBtn" onClick={this.handleLikeBtn}>
        <i className={`fas fa-heart ${isToggleOn ? '' : 'colorIcon'}`}></i>
        <span>{this.props.productResult && this.props.productResult.like}</span>
      </button>
    );
  }
}

export default LikeBtn;
