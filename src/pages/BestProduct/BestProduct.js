import React, { Component } from 'react';
import './BestProduct.scss';

class BestProduct extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  // API 주소 임의로 넣어놓음

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
    // const {
    //   id,
    //   mainImage,
    //   category,
    //   name,
    //   cookingTime,
    //   serving,
    //   like,
    //   this_user_like,
    // } = this.state.productList;
    return (
      <div className="best">
        <div className="bestHeader">
          <span>MONTHLY BEST</span>
        </div>
        <div className="BestList">
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
        </div>
      </div>
    );
  }
}

export default BestProduct;
