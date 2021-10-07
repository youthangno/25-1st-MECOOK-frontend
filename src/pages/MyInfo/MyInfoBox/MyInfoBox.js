import React from 'react';
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
          My Info Box
          <button className="btnMyInfo" onClick={this.handleShowBtnClick}>
            <span>
              My Info<i className="fas fa-caret-down"></i>
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default MyInfoBox;
