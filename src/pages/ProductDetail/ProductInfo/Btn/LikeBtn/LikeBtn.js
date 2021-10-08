import React from 'react';
import './LikeBtn.scss';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likeCount: 71,
      isToggleOn: false,
    };
  }

  handleLikeBtn = () => {
    this.setState(likeButton => ({
      isToggleOn: !likeButton.isToggleOn,
    }));
  };

  render() {
    const { likeCount, isToggleOn } = this.state;
    return (
      <button className="likeBtn" onClick={this.handleLikeBtn}>
        {/* 이거 마우스오버하면 하트 아이콘 10% 켜져라 누르면 숫자1이 올라간다.
        색깔이 생긴다. 다시 누르면 숫자가1내려간다. 색깔이 없어진다.
        반복. */}
        <i className={`fas fa-heart ${isToggleOn ? 'colorIcon' : ''}`}></i>

        <span>{isToggleOn ? likeCount : likeCount - 1}</span>
      </button>
    );
  }
}

// onMouseOver
export default LikeBtn;
