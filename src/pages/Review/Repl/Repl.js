import React, { Component } from 'react';
import './Repl.scss';

class Repl extends Component {
  render() {
    const { user, review, userDate } = this.props;
    return (
      <li>
        <div className="reviewContent">{review}</div>
        <div className="deleteReview">
          <button className="deleteBtn">X</button>
        </div>
        <div className="reviewInfo">
          <p id="userId">{user}</p>
          <p id="userDate">{userDate}</p>
        </div>
      </li>
    );
  }
}

export default Repl;
