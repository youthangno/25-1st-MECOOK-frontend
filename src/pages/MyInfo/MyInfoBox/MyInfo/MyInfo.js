import React from 'react';
import './MyInfo.scss';

class MyInfo extends React.Component {
  render() {
    return (
      <div className="MyInfoContainer">
        <h1 className="MyInfoTitle">My Info</h1>
        <div className="MyInfoContent">
          <div className="MyInfoRow">
            <p>
              <span className="userName">정민지</span> 고객님!
            </p>
            <h5>
              <span className="userPoint">4,000</span>점
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
