import React from 'react';
import './MyInfo.scss';

class MyInfo extends React.Component {
  render() {
    return (
      <div className="myInfoContainer">
        <h1 className="myInfoTitle">My Info</h1>
        <div className="myInfoContent">
          <div className="myInfoPoint">
            <p>
              <span className="userName">정민지</span> 고객님!
            </p>
            <div className="line"></div>
            <h5>
              <i className="fas fa-coins"></i>
              <span className="userPoint">4,000</span>점
            </h5>
          </div>
          <div className="myInfoGrade">
            <span className="userGrade">VIP</span>등급
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
