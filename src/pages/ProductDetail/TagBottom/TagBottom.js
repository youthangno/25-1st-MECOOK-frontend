import React from 'react';
import { Link } from 'react-router-dom';
import './TagBottom.scss';

class TagBottom extends React.Component {
  handleClick = () => {
    fetch();
  };

  render() {
    const { resultDataList } = this.props;
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          {resultDataList &&
            resultDataList[0].hashtag.map((tag, i) => {
              return (
                <li onClick={handleClick} key={i}>
                  <Link to="#">{`#${tag}`}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default TagBottom;
