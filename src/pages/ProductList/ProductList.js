import React from 'react';
import ProductPreview from './ProductPreview/ProductPreview';
import './ProductList.scss';

class ProductList extends React.Component {
  state = {
    productList: [],
  };

  componentDidUpdate() {
    fetch(`http://localhost:3000/data/productData${this.props.listId}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ productList: data }));
  }

  render() {
    return (
      <div
        className={`productListContainer ${
          this.props.isVisible ? 'showProductList' : 'hideProductList'
        }`}
      >
        <div className="productListHeader">
          <button
            className="btnCloseProductList"
            onClick={this.props.handleCloseProductList}
          >
            <i className="fas fa-chevron-circle-left fa-2x"></i>{' '}
            <span>BACK</span>
          </button>
        </div>

        <div className="productListContent">
          {/* mock data로 map 돌려서 구현 예정 */}
          {this.state.productList.map(product => {
            return (
              <ProductPreview
                key={product.id}
                image={product.image}
                type={product.type}
                name={product.name}
                cookingTime={product.cookingTime}
                availPeople={product.availPeople}
                like={product.like}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
