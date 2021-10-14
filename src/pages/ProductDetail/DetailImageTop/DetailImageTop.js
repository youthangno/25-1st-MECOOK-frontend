import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    console.log();
    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>
            {this.props.productData ? this.props.productData[2].text : null}
          </p>
        </div>
        <figure>
          <img
            alt="케이크"
            src={
              this.props.productData
                ? this.props.productData[2].image_url
                : null
            }
          />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
