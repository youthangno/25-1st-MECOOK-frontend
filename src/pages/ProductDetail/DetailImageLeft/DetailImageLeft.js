import React from 'react';
import './DetailImageLeft.scss';

class DetailImageLeft extends React.Component {
  render() {
    return (
      <div className="detailImageLeft">
        <figure>
          {/* 이미지 데이터 값 */}

          <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" />
        </figure>
      </div>
    );
  }
}

export default DetailImageLeft;
