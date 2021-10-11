import React from 'react';
import './LikeBtn.scss';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likeCount: '',
      isToggleOn: false,
    };
  }

  componentDidMount() {
    fetch(
      'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(likeData => {
        this.setState({
          likeCount: likeData.result[0].likes,
        });
      });
  }

  //   handleLikeBtn = () => {
  //     this.setState(likeButton => ({
  //       isToggleOn: !likeButton.isToggleOn,
  //     }));

  //     if (!this.state.isToggleOn) {
  //       const TOKEN = localStorage.getItem('token');

  //       fetch(
  //         'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
  //         {
  //           method: 'POST',
  //           ...(TOKEN && {
  //             headers: {
  //               Authorization: TOKEN,
  //             },
  //           }),
  //         }
  //       )
  //         .then(res => res.json())
  //         .then(() => {
  //           fetch(
  //             'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
  //             {

  //             }
  //           )
  //         }
  //   };

  handleLikeBtn = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      likeCount: this.state.isToggleOn
        ? this.state.likeCount - 1
        : this.state.likeCount + 1,
    });
  };

  render() {
    const { likeCount, isToggleOn } = this.state;
    return (
      <button className="likeBtn" onClick={this.handleLikeBtn}>
        <i className={`fas fa-heart ${isToggleOn ? 'colorIcon' : ''}`}></i>
        <span>{likeCount}</span>
      </button>
    );
  }
}

// onMouseOver
export default LikeBtn;
