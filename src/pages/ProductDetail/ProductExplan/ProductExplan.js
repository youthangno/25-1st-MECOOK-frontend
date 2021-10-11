import React from 'react';
import './ProductExplan.scss';

class ProductExplan extends React.Component {
  render() {
    console.log('prop==>', this.props.dataList);
    const dataList = this.props.dataList;
    {
      this.props.dataList && console.log(this.props.dataList[0].image_url);
    }

    return (
      <div className="productImage">
        <img alt="물만두" src={dataList && this.props.dataList[0].image_url} />
      </div>
    );
  }
}

export default ProductExplan;
