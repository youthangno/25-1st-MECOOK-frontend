import React from 'react';
import ProductPreview from './ProductPreview/ProductPreview';
import './ProductList.scss';
class ProductList extends React.Component {
  state = {
    productList: [],
  };

  // API 연동될 때
  componentDidUpdate(prevProps) {
    if (this.props.listId !== prevProps.listId) {
      fetch(
        `https://f960-211-106-114-186.ngrok.io/product/menu/${this.props.listId}/navbar`,
        {
          method: 'GET',
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ productList: data.result[0] });
        });
    }
  }

  // API 연동 안될때
  // componentDidUpdate(prevProps) {
  //   if (this.props.listId !== prevProps.listId) {
  //     fetch(`data/productData${this.props.listId}.json`, {
  //       method: 'GET',
  //     })
  //       .then(res => res.json())
  //       .then(data => this.setState({ productList: data }));
  //   }
  // }

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
            <i className="fas fa-chevron-circle-left fa-2x"></i>
            <span>BACK</span>
          </button>
        </div>

        <div className="productListContent">
          {/* mock data로 map 돌려서 구현 예정 */}
          {this.state.productList.map(product => {
            const {
              id,
              mainImage,
              category,
              name,
              cookingTime,
              serving,
              like,
            } = product;
            return (
              <ProductPreview
                key={id}
                productId={id}
                mainImage={mainImage}
                category={category}
                name={name}
                cookingTime={cookingTime}
                serving={serving}
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
