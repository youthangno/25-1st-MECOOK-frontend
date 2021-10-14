import React from 'react';
import './DetailImageRight.scss';

class DetailImageRight extends React.Component {
  render() {
    return (
      <div className="detailImageRight">
        <figure>
          {/* 이미지 데이터 값 */}

          <img
            alt="케이크"
            src={
              this.props.dataDetail ? this.props.dataDetail[1].imgDetail : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageRight;
