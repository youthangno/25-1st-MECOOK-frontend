import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailImageTop from './DetailImageTop/DetailImageTop';
import DetailImageLeft from './DetailImageLeft/DetailImageLeft';
import DetailImageRight from './DetailImageRight/DetailImageRight';
import DetailImageBottom from './DetailImageBottom/DetailImageBottom';
import TagBottom from './TagBottom/TagBottom';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;

    fetch(
      `https://f960-211-106-114-186.ngrok.io/product/?product=${productId}&detail=1`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }

  render() {
    return (
      <>
        {
          <div className="productDetail">
            <ProductExplan
              dataDetail={
                this.state.productData.result &&
                this.state.productData.result[0].detail
              }
            />
            <ProductInfo
              productResult={
                this.state.productData.result &&
                this.state.productData.result[0]
              }
              productId={
                this.state.productData.result &&
                this.state.productData.result[0].id
              }
            />

            <DetailImageTop
              dataDetail={
                this.state.productData.result &&
                this.state.productData.result[0].detail
              }
            />
            <DetailImageLeft
              dataDetail={
                this.state.productData.result &&
                this.state.productData.result[0].detail
              }
            />
            <DetailImageRight
              dataDetail={
                this.state.productData.result &&
                this.state.productData.result[0].detail
              }
            />
            <DetailImageBottom
              dataDetail={
                this.state.productData.result &&
                this.state.productData.result[0].detail
              }
            />
            <TagBottom
              // productId={this.props.match.params.id}
              dataResult={this.state && this.state.productData}
            />
          </div>
        }
      </>
    );
  }
}

//.result[0].hashtag

export default ProductDetail;
