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
            src={this.props.productData && this.props.productData[4].image_url}
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageRight;
