import React, { Component } from 'react';
import ProductPreview from '../../ProductList/ProductPreview/ProductPreview';
import '../Best/Best.scss';

class Best extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
    };
  }

  componentDidMount() {
    fetch('./data/bestMenuData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.result,
        });
      });
  }

  render() {
    const { menuList } = this.state;
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
            <i className="fas fa-award" />
            &nbsp;BEST ITEMS
          </p>
          <ul className="listItems">
            {menuList &&
              menuList.map(m => {
                const {
                  id,
                  image,
                  type,
                  name,
                  cookingTime,
                  availPeople,
                  like,
                } = m;
                return (
                  <ProductPreview
                    key={id}
                    id={id}
                    image={image}
                    type={type}
                    name={name}
                    cookingTime={cookingTime}
                    availPeople={availPeople}
                    like={like}
                  />
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Best;
