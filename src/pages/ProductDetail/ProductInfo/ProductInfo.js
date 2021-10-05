import React from 'react';
import './ProductInfo.scss';
import ProductCountBtn from './ProductCountBtn/CartPlusBtn';
import NutritionTable from './NutritionTable/NutritionTable';
import AddCartBtn from './AddCartButton/AddCartBtn';
import LikeBtn from './LikeButton/LikeButton';
class ProductInfo extends React.Component {
  render() {
    return (
      <div className="box">
        ProductInfo
        <NutritionTable />
        <LikeButton />
        <CartPlusButton />
        <AddCartButton />
      </div>
    );
  }
}

export default ProductInfo;
