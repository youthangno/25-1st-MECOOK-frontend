import React from 'react';
import { Link } from 'react-router-dom';
import './TagBottom.scss';

class TagBottom extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredList: [],
    };
  }

  handleClick = hashTag => {
    fetch(
      `https://f960-211-106-114-186.ngrok.io/product/?search="진한"&search="우보탕"`,
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(result => {
        this.setState({
          filteredList: result,
        });
      });
  };

  render() {
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          {this.props.dataResult.result &&
            this.props.dataResult.result[0].hashtag.map((tag, i) => {
              return (
                <li className="li" key={i}>
                  <Link
                    to="/search-result"
                    onClick={() => {
                      this.handleClick(tag);
                    }}
                  >{`#${tag}`}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default TagBottom;
