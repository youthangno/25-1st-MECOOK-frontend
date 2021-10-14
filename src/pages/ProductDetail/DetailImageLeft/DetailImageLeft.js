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
            src={this.props.productData && this.props.productData[3].image_url}
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageLeft;
