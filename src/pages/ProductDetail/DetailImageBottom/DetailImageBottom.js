import React from 'react';
import './DetailImageBottom.scss';

class DetailImageBottom extends React.Component {
  render() {
    return (
      <div className="detailImageBottom">
        {/* 받아올 멘트 */}
        <h1> 늘 고기만 더 럽, 질긴 맛</h1>
        <figure>
          {/* 이미지 데이터 값 */}
          <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" />
        </figure>
      </div>
    );
  }
}

export default DetailImageBottom;
