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
  state = {
    productData: [{ albumId: '', id: '', title: ' ', image: '', info: '' }],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data.result,
        });
      });
  }

  render() {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24'
    );

    const dataList = this.state.productData[0];
    return (
      <>
        <div className="productDetail">
          <ProductExplan dataList={dataList} />
          <ProductInfo dataList={dataList} />
          <DetailImageTop dataList={dataList} />
          <DetailImageLeft dataList={dataList} />
          <DetailImageRight dataList={dataList} />
          <DetailImageBottom dataList={dataList} />
          <NutritionTable dataList={dataList} />
          <TagBottom dataList={dataList} />
        </div>
      </>
    );
  }
}

export default ProductDetail;
