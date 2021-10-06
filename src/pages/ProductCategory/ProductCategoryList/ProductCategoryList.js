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
        &nbsp;{this.props.name}&nbsp;
      </li>
    );
  }
}

export default ProductCategory;
