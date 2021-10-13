import React, { Component } from 'react';
import './BestProduct.scss';
import ProductPreview from '../ProductList/ProductPreview/ProductPreview';

class BestProduct extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('https://f960-211-106-114-186.ngrok.io/product/main', {
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
      <div className="best">
        <div className="bestHeader">
          <span>MONTHLY BEST</span>
        </div>
        <ul className="BestList">
          {menuList &&
            menuList.map(m => {
              const {
                id,
                mainImage,
                category,
                name,
                cookingTime,
                serving,
                like,
              } = m;
              return (
                <ProductPreview
                  key={id}
                  id={id}
                  image={mainImage}
                  type={category}
                  name={name}
                  cookingTime={cookingTime}
                  availPeople={serving}
                  like={like}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default BestProduct;
