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

  handleLikeBtn = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      likeCount: this.state.isToggleOn
        ? this.state.likeCount - 1
        : this.state.likeCount + 1,
    });
  };

  render() {
    // localStorage.setItem(
    //   'token',
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24'
    // );
    const { likeCount, isToggleOn } = this.state;
    return (
      <button className="likeBtn" onClick={this.handleLikeBtn}>
        <i className={`fas fa-heart ${isToggleOn ? 'colorIcon' : ''}`}></i>
        <span>{likeCount}</span>
      </button>
    );
  }
}

export default LikeBtn;
