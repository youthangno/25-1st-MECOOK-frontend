import React from 'react';
import './AddCartBtn.scss';

class AddCartBtn extends React.Component {
  clickCartBtn = () => {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      fetch('http://10.58.2.208:8000/cart', {
        method: 'POST',
        headers: {
          Authorization: TOKEN,
        },
        body: JSON.stringify({
          product: '11',
          quantity: this.props.quantity,
        }),
      })
        .then(res => res.json())
        .then(data => data);
    } else {
      alert('로그인한 사용자만 이용할 수 있는 서비스입니다.');
    }
    console.log(this.props.quantity);
  };

  render() {
    // console.log(this.props.quantity);
    return (
      <button onClick={this.clickCartBtn} className="addCartBtn">
        ADD TO MY MENU
      </button>
    );
  }
}

export default AddCartBtn;
