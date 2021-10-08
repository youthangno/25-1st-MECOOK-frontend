import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Review.scss';
import Repl from './Repl/Repl';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      userName: '4.21ee',
      userDate: '2021/10/07',
      replList: [],
      // id: 0,
    };
  }

  addRepl = e => {
    this.setState({
      content: e.target.value,
    });
  };

  enterBtn = e => {
    const { content } = this.state;
    if (e.key === 'Enter' && content.trim()) {
      this.addComment();
      e.target.value = '';
    }
  };

  addComment = () => {
    const { content, replList, userName, userDate } = this.state;
    // const cnt = replList.length + 1;
    if (content.trim() === '' || content === '') {
      return;
    }
    this.setState({
      replList: replList.concat({
        // id: cnt,
        userName: userName,
        userDate: userDate,
        content: content.trim(),
      }),
      content: '',
    });
  };

  clearInput = () => {
    this.setState({
      content: '',
    });
  };

  componentDidMount() {
    fetch('./data/reviewData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data.result,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <section className="review">
        <div className="reviewTop">
          <label className="reviewTitle">
            REVIEW<span>(200)</span>
          </label>
          <div className="textArea">
            <div className="textInputBox">
              <textarea
                className="textInput"
                placeholder="통신예절에 어긋나는 글이나 상업적인 글. 타 사이트에 관련된 글은 관리자에 의해 사전 통보없이 삭제될 수 있습니다"
                onChange={this.addRepl}
                onKeyPress={this.enterBtn}
                value={this.state.content}
              />
              <div className="textInputLimit">0/100</div>
            </div>
            <button className="textInputBtn" onClick={this.addComment}>
              등록
            </button>
          </div>
          <ul className="reviewList">
            {this.state.replList &&
              this.state.replList.map((repl, idx) => {
                const { userName, content, userDate } = repl;
                return (
                  <Repl
                    className="dfdf"
                    userName={userName}
                    content={content}
                    userDate={userDate}
                  />
                );
              })}
          </ul>
        </div>
        <div className="viewMore">
          <Link to="/n">&nbsp;&nbsp;VIEW MORE&#8314;&nbsp;&nbsp;</Link>
          <span>1</span>
          <span>/10</span>
        </div>
      </section>
    );
  }
}

export default Review;
