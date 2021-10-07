import React from 'react';
import ProductCategoryList from './ProductCategoryList/ProductCategoryList';
import ProductList from '../ProductList/ProductList';
import CATEGORY_DATA from './productCategoryData';
import './ProductCategory.scss';

// Header와 연결시 헤더에서 누른 카테고리값 props로 받아올 부분
const category = 'DINING'.toLowerCase();

class ProductCategory extends React.Component {
  state = {
    isVisible: false,
    listId: 1,
  };

  handleShowProductList = e => {
    this.setState({ isVisible: true });
  };

  handleMouseOverList = e => {
    this.setState({ listId: e.target.id });
  };

  handleCloseProductList = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className={`categoryContainer ${category}${this.state.listId}`}>
        <div className="cover">
          <button className="btnClose"></button>
          <p className="categoryListTitle">
            <span>{category.toUpperCase()}</span>
          </p>
          <ul className="categoryListContainer">
            {CATEGORY_DATA[category].map((category, index) => {
              return (
                <ProductCategoryList
                  key={index}
                  id={index + 1}
                  name={category}
                  handleShowProductList={this.handleShowProductList}
                  handleMouseOverList={this.handleMouseOverList}
                />
              );
            })}
          </ul>
        </div>
        <ProductList
          listId={this.state.listId}
          isVisible={this.state.isVisible}
          handleCloseProductList={this.handleCloseProductList}
        />
      </div>
    );
  }
}

export default ProductCategory;
