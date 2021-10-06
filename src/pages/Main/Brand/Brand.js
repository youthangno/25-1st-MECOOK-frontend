import React, { Component } from 'react';
import '../Brand/Brand.scss';

class Brand extends Component {
  render() {
    return (
      <section className="brand">
        <img id="brandPic" src="/images/Main/brand2.jpg" />
        <div className="brandTitle">
          <p>BRAND STORY</p>
        </div>
        <div className="brandDesc">
          <p>소소한 일상에&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;맛있는 즐거움</p>
        </div>
      </section>
    );
  }
}

export default Brand;
