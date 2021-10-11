import React from 'react';
import './AddCartBtn.scss';

class AddCartBtn extends React.Component {
  constructor() {
    super();
  }

  clickCartBtn = () => {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      fetch('', {
        method: 'POST',
        headers: {
          Authorization: TOKEN,
        },
        body: JSON.stringify({
          ProductId: 1,
          ProductCount: 5,
        }),
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            cartList: data,
          });
        });
    } else {
      alert('로그인 한 사용자만 이용 가능합니다.');
    }
  };

  render() {
    return (
      <button onClick={this.clickCartBtn} className="addCartBtn">
        ADD TO MY MENU
      </button>
    );
  }
}

export default AddCartBtn;
