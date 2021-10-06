import React from 'react';
import ProductPreview from './ProductPreview/ProductPreview';
import './ProductList.scss';

class ProductList extends React.Component {
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
          <ProductPreview />
        </div>
      </div>
    );
  }
}

export default ProductList;
