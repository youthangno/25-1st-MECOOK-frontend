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

  render() {
    return (
      <>
        <div
          className={`myInfoBoxContainer ${
            this.state.isBoxVisible ? 'showBox' : 'hideBox'
          }`}
        >
          <button onClick={this.plus}>plus</button>
          <MyInfo />
          <Cart />
          {/* <Cart productList={this.state.productList} /> */}
          <BtnMyInfo handleShowBtnClick={this.handleShowBtnClick} />
        </div>
      </>
    );
  }
}

export default MyInfoBox;
