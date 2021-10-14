import React from 'react';
import BtnMyInfo from './BtnMyInfo/BtnMyInfo';
import MyInfo from './MyInfo/MyInfo';
import Cart from './Cart/Cart';
import NonMemberInfo from './MyInfo/NonMemberInfo/NonMemberInfo';
import './MyInfoBox.scss';

const TOKEN = localStorage.getItem('token');

class MyInfoBox extends React.Component {
  state = {
    isBoxVisible: false,
    userInfo: '',
  };

  componentDidMount() {
    if (TOKEN) {
      fetch('http://18.117.185.247:8000/user/login', {
        method: 'POST',
        body: JSON.stringify({
          account: 'aaaaaa',
          password: 'Aa123456!',
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            userInfo: data.message,
          });
        });
    }
  }

  handleShowBtnClick = () => {
    this.setState({ isBoxVisible: !this.state.isBoxVisible });
  };

  render() {
    return (
      <>
        <div
          className={`myInfoBoxContainer ${
            this.state.isBoxVisible ? 'showBox' : 'hideBox'
          }`}
        >
          {TOKEN ? (
            <MyInfo
              userName={this.state.userInfo && this.state.userInfo[0]}
              point={this.state.userInfo && this.state.userInfo[1]}
              grade={'VIP'}
            />
          ) : (
            <NonMemberInfo />
          )}
          <Cart
            point={this.state.userInfo && this.state.userInfo[1]}
            cartList={this.state.cartList}
          />
          <BtnMyInfo handleShowBtnClick={this.handleShowBtnClick} />
        </div>
      </>
    );
  }
}

export default MyInfoBox;
