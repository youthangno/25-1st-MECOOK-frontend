import React, { Component } from 'react';
import ProductPreview from '../../ProductList/ProductPreview/ProductPreview';
import '../Best/Best.scss';

class Best extends Component {
  render() {
    return (
      <section className="best">
        <div className="bestTitle">
          <img alt="dish" src="/images/Main/dish.png" />
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
          <p id="viewBest">
            VIEW BEST&nbsp;<i class="fas fa-chevron-right"></i>
          </p>
          <ul className="listItems">
            <li className="food">
              <ProductPreview />
            </li>
            <li className="food">
              <ProductPreview />
            </li>
            <li className="food">
              <ProductPreview />
            </li>
            <li className="food">
              <ProductPreview />
            </li>
            <li className="food">
              <ProductPreview />
            </li>
            <li className="food">
              <ProductPreview />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Best;
