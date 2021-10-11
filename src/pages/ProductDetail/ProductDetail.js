import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailImageTop from './DetailImageTop/DetailImageTop';
import DetailImageLeft from './DetailImageLeft/DetailImageLeft';
import DetailImageRight from './DetailImageRight/DetailImageRight';
import DetailImageBottom from './DetailImageBottom/DetailImageBottom';
import TagBottom from './TagBottom/TagBottom';
import NutritionTable from './NutritionTable(영양성분)/NutritionTable';
import './ProductDetail.scss';
class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }

  render() {
    // localStorage.setItem(
    //   'token',
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24'
    // );

    // if (this.state.productData.detail && this.state.productData.detail[0]) {
    //   console.log(this.state.productData.detail[0].image_url);
    // }

    const dataList = this.state.productData.detail;
    return (
      <>
        <div className="productDetail">
          <ProductExplan dataList={dataList} />
          <ProductInfo dataList={dataList} />
          <DetailImageTop dataList={dataList} />
          <DetailImageLeft dataList={dataList} />
          {/* <DetailImageRight dataList={this.state.productData.detail} />
          <DetailImageBottom dataList={this.state.productData.detail} />
          <NutritionTable dataList={this.state.productData.detail} />
          <TagBottom dataList={this.state.productData.detail} /> */}
        </div>
      </>
    );
  }
}

export default ProductDetail;
