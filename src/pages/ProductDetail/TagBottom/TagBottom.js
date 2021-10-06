import React from 'react';
import './TagBottom.scss';

class TagBottom extends React.Component {
  render() {
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          <li>#치즈</li>
          <li>#든든한</li>
          <li>#볶음밥</li>
          <li>#고소한</li>
          <li>#한끼</li>
          <li>#혼밥</li>
          <li>#식샤</li>
        </ul>
      </div>
    );
  }
}

export default TagBottom;
