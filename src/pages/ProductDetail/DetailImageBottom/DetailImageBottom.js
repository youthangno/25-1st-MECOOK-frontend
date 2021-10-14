import React from 'react';
import './DetailImageBottom.scss';

class DetailImageBottom extends React.Component {
  render() {
    return (
      <div className="detailImageBottom">
        {/* 받아올 멘트 */}
        <h1> {this.props.dataDetail ? this.props.dataDetail[4].text : null}</h1>
        <figure>
          {/* 이미지 데이터 값 */}
          <img
            alt="연어"
            src={
              this.props.dataDetail ? this.props.dataDetail[4].imgDetail : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageBottom;
