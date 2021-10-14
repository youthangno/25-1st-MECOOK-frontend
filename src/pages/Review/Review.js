import React, { Component } from 'react';
import './Review.scss';
import Repl from './Repl/Repl';
import ReviewBtn from './ReviewBtn/ReviewBtn';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      userName: '4.21ee',
      userDate: '2021/10/07',
      replList: [],
      id: this.cnt,
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
    } else if (e.key === 'Enter' && !content.trim()) {
      alert('리뷰를 입력해주세요.');
    }
  };

  addComment = () => {
    const { content, replList, userName } = this.state;
    let today = new Date();
    let time = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
    };
    const cnt = replList.length + 1;
    let timestring = `${time.year}/${time.month}/${time.date}`;
    if (content.trim() === '' || content === '') {
      alert('리뷰를 입력해주세요.');
      return;
    }
    this.setState({
      replList: replList.concat({
        id: cnt,
        userName: userName,
        userDate: timestring,
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
    const TOKEN = localStorage.getItem('token');

    fetch('./data/reviewData.json', {
      method: 'GET',
      headers: {
        Authorization: TOKEN,
      },
      // body: JSON.stringify({
      //   user: '1',
      //   product: '1',
      //   review: 'sdfsdf',
      // }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data.result,
        });
      });
  }

  render() {
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
              this.state.replList.map(repl => {
                const { userName, content, userDate, id } = repl;
                return (
                  <Repl
                    key={id}
                    userName={userName}
                    content={content}
                    userDate={userDate}
                  />
                );
              })}
          </ul>
        </div>
        <ReviewBtn replList={this.state.replList} />
      </section>
    );
  }
}

export default Review;
