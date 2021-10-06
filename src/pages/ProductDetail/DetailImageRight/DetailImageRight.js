import React from 'react';
import './DetailImageRight.scss';

class DetailImageRight extends React.Component {
  render() {
    return (
      <div className="detailImageRight">
        <figure>
          {/* 이미지 데이터 값 */}

          <img src="https://cdn.pixabay.com/photo/2020/07/06/13/14/cucumbers-5376961_960_720.jpg" />
        </figure>
      </div>
    );
  }
}

export default DetailImageRight;
