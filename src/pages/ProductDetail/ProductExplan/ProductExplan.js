import React from 'react';
import './ProductExplan.scss';

class ProductExplan extends React.Component {
  render() {
    // console.log(this.props);
    const { image } = this.props.dataList;
    return (
      <div className="productImage">
        <img alt="물만두" src={image} />
      </div>
    );
  }
}

export default ProductExplan;
