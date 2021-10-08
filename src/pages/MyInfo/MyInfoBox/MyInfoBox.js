import React from 'react';
import BtnMyInfo from './BtnMyInfo/BtnMyInfo';
import MyInfo from './MyInfo/MyInfo';
import Cart from './Cart/Cart';
import './MyInfoBox.scss';

class MyInfoBox extends React.Component {
  state = {
    isBoxVisible: true,
  };

  handleShowBtnClick = () => {
    this.setState({ isBoxVisible: !this.state.isBoxVisible });
  };

  getBoxWidth = () => {};

  render() {
    return (
      <>
        <div
          className={`myInfoBoxContainer ${
            this.state.isBoxVisible ? 'showBox' : 'hideBox'
          }`}
        >
          <MyInfo />
          <Cart />
          <BtnMyInfo handleShowBtnClick={this.handleShowBtnClick} />
        </div>
      </>
    );
  }
}

export default MyInfoBox;
