import React, { Component } from 'react';
import '../Gourmet/Gourmet.scss';

class Gourmet extends Component {
  onMouseOver;
  render() {
    return (
      <section className="gourmet">
        <div className="gourmetTitle">
          <span>Gourmet</span>
        </div>
        <div className="gourmetList">
          <div className="gList1">
            <p>맛집콜라보</p>
            <img alt="matzip" src="/images/Main/matzip.jpg" />
          </div>
          <div className="gList2">
            <p>미쿡반점</p>
            <img alt="joongsik" src="/images/Main/chinese.jpg" />
          </div>
          <div className="gList3">
            <p>만두 연구소</p>
            <img alt="mandoo" src="/images/Main/dumpling.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default Gourmet;
// onMouseOver={}
