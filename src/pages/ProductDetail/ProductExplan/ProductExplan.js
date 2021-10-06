import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import './ProductExplan.scss';
import ProductImageList from './ProductImageList/ProductImageList';

class ProductExplan extends React.Component {
  state = {
    productData: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }

  render() {
    const { productData } = this.state;
    return (
      <>
        <div>
          <ProductImageList productData={productData} />
        </div>
      </>
    );
  }
}

export default ProductExplan;
