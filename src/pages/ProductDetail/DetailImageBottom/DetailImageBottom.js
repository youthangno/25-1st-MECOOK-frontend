import React from 'react';
import './DetailImageBottom.scss';

class DetailImageBottom extends React.Component {
  render() {
    const { dataList } = this.props;
    console.log(dataList);

    return (
      <div className="detailImageBottom">
        {/* 받아올 멘트 */}
        <h1>
          {' '}
          {this.props.productData ? this.props.productData[5].text : null}}
        </h1>
        <figure>
          {/* 이미지 데이터 값 */}
          <img
            alt="연어"
            src={
              this.props.productData
                ? this.props.productData[5].image_url
                : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageBottom;
