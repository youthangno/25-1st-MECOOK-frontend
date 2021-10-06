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
    const { isVisible, handleCloseProductList } = this.props;
    return (
      <div
        className={`productListContainer ${
          isVisible ? 'showProductList' : 'hideProductList'
        }`}
      >
        <div className="productListHeader">
          <button
            className="btnCloseProductList"
            onClick={handleCloseProductList}
          >
            <i className="fas fa-chevron-circle-left fa-2x"></i>{' '}
            <span>BACK</span>
          </button>
        </div>

        <div className="productListContent">
          {/* mock data로 map 돌려서 구현 예정 */}
          {this.state.productList.map(product => {
            const { id, image, type, name, cookingTime, availPeople, like } =
              product;
            return (
              <ProductPreview
                key={id}
                image={image}
                type={type}
                name={name}
                cookingTime={cookingTime}
                availPeople={availPeople}
                like={like}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
