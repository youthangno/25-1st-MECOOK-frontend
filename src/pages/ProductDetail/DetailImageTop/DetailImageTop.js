import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>{this.props.dataDetail ? this.props.dataDetail[2].text : null}</p>
        </div>
        <figure>
          <img
            alt="케이크"
            src={
              this.props.dataDetail ? this.props.dataDetail[2].imgDetail : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
