import React, { Component } from 'react';
import './Repl.scss';

class Repl extends Component {
  deleteR = () => {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s';

    fetch('https://f960-211-106-114-186.ngrok.io/review/comment/2', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(
        fetch('https://f960-211-106-114-186.ngrok.io/review/list/1')
          .then(res => res.json())
          .then(data => {
            this.setState({
              replList: data.result,
            });
          })
          .catch(err => console.log('feeds', err))
      );
  };

  componentDidMount() {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s';

    fetch('https://f960-211-106-114-186.ngrok.io/review/list/1', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data.result,
        });
      });
  }

  render() {
    const { review_id, user, review, userDate } = this.props;
    return (
      <li>
        <div className="reviewContent">{review}</div>
        <div className="deleteReview">
          <button className="deleteBtn" onClick={this.deleteR}>
            X
          </button>
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
