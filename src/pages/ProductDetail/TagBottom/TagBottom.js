import React from 'react';
import './TagBottom.scss';

class TagBottom extends React.Component {
  render() {
    const resultList = this.props.resultList;
    console.log(resultList);
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          <li>#{resultList && resultList[4].hashtag[0]}</li>
          <li>#{}</li>
          <li>#{}</li>
          <li>#{}</li>
          <li>#{}</li>
          <li>#{}</li>
          <li>#{}</li>
        </ul>
      </div>
    );
  }
}

export default TagBottom;
