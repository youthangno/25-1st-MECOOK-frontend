import React from 'react';
import './ProductInfo.scss';
import NutritionTable from './NutritionTable(영양성분)/NutritionTable';
import Btn from './Btn/Btn';
class ProductInfo extends React.Component {
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
      <div className="productInfoBox">
        {productData.map(data => {
          return <h1>{data.info}</h1>;
        })}
        <NutritionTable />
        <Btn />
      </div>
    );
  }
}

export default ProductInfo;
