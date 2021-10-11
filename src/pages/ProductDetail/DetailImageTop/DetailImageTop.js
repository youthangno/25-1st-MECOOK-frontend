import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    const dataList = this.props.dataList;

    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>{dataList && dataList[0].text}</p>
        </div>
        <figure>
          <img
            alt="케이크"
            src={dataList && this.props.dataList[0].image_url}
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
