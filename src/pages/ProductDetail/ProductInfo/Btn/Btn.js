import React from 'react';
import './Btn.scss';
import LikeBtn from './LikeBtn/LikeBtn';

class Btn extends React.Component {
  render() {
    return (
      <div className="Btn">
        <LikeBtn />
        <button className="ProductCountBtn">수량선택</button>
        <button className="AddCartBtn">ADD TO MY MENU</button>
      </div>
    );
  }
}

export default Btn;
