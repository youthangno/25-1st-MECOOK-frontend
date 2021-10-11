import React from 'react';
import { Link } from 'react-router-dom';
import './TagBottom.scss';

class TagBottom extends React.Component {
  render() {
    const result = this.props.resultDataList;
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          {result &&
            result[0].hashtag.map((tag, i) => {
              return (
                <li key={i}>
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
