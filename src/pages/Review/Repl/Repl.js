import React, { Component } from 'react';
import './Repl.scss';

class Repl extends Component {
  render() {
    const { userName, content, userDate } = this.props;
    return (
      <li>
        <div className="reviewContent">{content}</div>
        <div className="reviewInfo">
          <p id="userId">{userName}</p>
          <p id="userDate">{userDate}</p>
        </div>
      </li>
    );
  }
}

export default Repl;
