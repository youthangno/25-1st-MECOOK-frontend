import React from 'react';
import './LikeBtn.scss';

class LikeBtn extends React.Component {
  render() {
    return (
      <button className="likeBtn">
        <i class="far fa-heart"></i>
        <span> 70</span>
      </button>
    );
  }
}

export default LikeBtn;
