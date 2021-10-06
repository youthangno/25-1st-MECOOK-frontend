import React from 'react';
import ProductCategoryList from './ProductCategoryList/ProductCategoryList';
import ProductList from '../ProductList/ProductList';
import './ProductCategory.scss';

const categories = ['KOREAN', 'CHINESE', 'JAPANESE', 'ITALIAN'];

class ProductCategory extends React.Component {
  state = {
    isVisible: false,
    backgroundImage: 0,
  };

  handleShowProductList = e => {
    this.setState({ isVisible: true });
  };

  handleMouseOverList = e => {
    console.log(e.target.id);
    this.setState({ backgroundImage: e.target.id });
    console.log('id:' + e.target.id);
    console.log('state:' + this.state.backgroundImage);
  };

  handleCloseProductList = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div
        className={`categoryContainer background${this.state.backgroundImage}`}
      >
        <div className="cover">
          <button className="btnClose"></button>
          <p className="categoryListTitle">
            <span>DINING</span>
          </p>
          <ul className="categoryListContainer">
            {categories.map((category, index) => {
              return (
                <ProductCategoryList
                  key={index}
                  id={index}
                  name={category}
                  handleShowProductList={this.handleShowProductList}
                  handleMouseOverList={this.handleMouseOverList}
                />
              );
            })}
          </ul>
        </div>
        <ProductList
          isVisible={this.state.isVisible}
          handleCloseProductList={this.handleCloseProductList}
        />
      </div>
    );
  }
}

export default ProductCategory;
