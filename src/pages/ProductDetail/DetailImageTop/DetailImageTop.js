import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    const { image } = this.props.dataList;

    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>고소한 풍미 가득</p>
          <p>이태리식 버터볶음밥</p>
        </div>
        <figure>
          <img alt="케이크" src={image} />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
