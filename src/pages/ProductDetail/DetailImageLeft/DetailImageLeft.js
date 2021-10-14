import React from 'react';
import './DetailImageLeft.scss';

class DetailImageLeft extends React.Component {
  render() {
    return (
      <div className="detailImageLeft">
        <figure>
          {/* 이미지 데이터 값 */}

          <img
            alt="케이크"
            src={
              this.props.dataDetail ? this.props.dataDetail[3].imgDetail : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageLeft;
