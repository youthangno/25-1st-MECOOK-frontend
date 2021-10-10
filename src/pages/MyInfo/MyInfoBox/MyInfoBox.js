import React from 'react';
import BtnMyInfo from './BtnMyInfo/BtnMyInfo';
import MyInfo from './MyInfo/MyInfo';
import Cart from './Cart/Cart';
import NonMemberInfo from './MyInfo/NonMemberInfo/NonMemberInfo';
import './MyInfoBox.scss';

const TOKEN = localStorage.getItem('token');

class MyInfoBox extends React.Component {
  state = {
    isBoxVisible: true,
    userInfo: '',
  };

  componentDidMount() {
    if (TOKEN) {
      fetch('data/MyInfo/userInfoData.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => this.setState({ userInfo: data[0] }));
    }
  }

  handleShowBtnClick = () => {
    this.setState({ isBoxVisible: !this.state.isBoxVisible });
  };

  render() {
    const { userName, point, grade } = this.state.userInfo;
    return (
      <>
        <div
          className={`myInfoBoxContainer ${
            this.state.isBoxVisible ? 'showBox' : 'hideBox'
          }`}
        >
          {TOKEN ? (
            <MyInfo userName={userName} point={point} grade={grade} />
          ) : (
            <NonMemberInfo />
          )}
          <Cart point={point} />
          {/* <Cart productList={this.state.productList} /> */}
          <BtnMyInfo handleShowBtnClick={this.handleShowBtnClick} />
        </div>
      </>
    );
  }
}

export default MyInfoBox;
