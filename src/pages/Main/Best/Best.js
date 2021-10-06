import React, { Component } from 'react';
import '../Best/Best.scss';

class Best extends Component {
  render() {
    return (
      <section className="best">
        <div className="bestTitle">
          <div className="topTitle">
            <p>MECOOK</p>
            <p id="best">BEST</p>
          </div>
          <div className="botTitle">
            <p>미쿡에서</p>
            <p>잘 나가는 메뉴를 한눈에!</p>
          </div>
        </div>
        <div className="bestList">
          <p>
            VIEW BEST&nbsp;<i class="fas fa-chevron-right"></i>
          </p>
          <ul className="listItems">
            <li className="food">1</li>
            <li className="food">2</li>
            <li className="food">3</li>
            <li className="food">4</li>
            <li className="food">5</li>
            <li className="food">6</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Best;
