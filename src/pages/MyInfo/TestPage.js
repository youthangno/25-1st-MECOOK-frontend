import React from 'react';
import './TestPage.scss';
import MyInfoBox from './MyInfoBox/MyInfoBox.js';

class MyInfo extends React.Component {
  render() {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24'
    );
    return (
      <div className="testPage">
        <h1>My Info Test Page</h1>
        <MyInfoBox />
      </div>
    );
  }
}

export default MyInfo;
