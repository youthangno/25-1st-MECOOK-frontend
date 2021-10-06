import React from 'react';
import './ProductCategoryList.scss';

class ProductCategory extends React.Component {
  render() {
    return (
      <li
        id={this.props.id}
        onClick={this.props.handleShowProductList}
        onMouseOver={this.props.handleMouseOverList}
      >
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default ProductCategory;
