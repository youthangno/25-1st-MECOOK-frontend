import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HashTag extends Component {
  constructor() {
    super();
    this.state = {
      hashtagList: [],
    };
  }
  componentDidMount() {
    fetch(
      'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          hashtagList: data.result[0].hashtag,
        });
      });
  }

  render() {
    const hashtagList = this.state.hashtagList;

    return (
      <>
        <span>당신의 맛있는 하루를 위한</span>
        <ul>
          {hashtagList.map((tag, i) => {
            return (
              <li>
                <Link to="#">{`#${tag}`}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HashTag;
