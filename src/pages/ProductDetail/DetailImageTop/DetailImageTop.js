import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>고소한 풍미 가득</p>
          <p>이태리식 버터볶음밥</p>
        </div>
        <figure>
          <img src="https://stimg.emart.com:448/upload/peacock/item/20171215_1535043_764.jpg" />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
