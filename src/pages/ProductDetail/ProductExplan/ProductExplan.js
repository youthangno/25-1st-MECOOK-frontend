import React from 'react';
import './ProductExplan.scss';

class ProductExplan extends React.Component {
  render() {
    return (
      <div className="productImage">
        <img
          alt="물만두"
          src={
            this.props.dataDetail ? this.props.dataDetail[0].imgDetail : null
          }
        />
      </div>
    );
  }
}

export default ProductExplan;
