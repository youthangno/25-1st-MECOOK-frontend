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
    const { result, detail } = this.state.productData;

    return (
      <>
        <div className="productDetail">
          <ProductExplan productData={detail} />
          <ProductInfo
            dataList={detail}
            productId={this.props.match.params.id}
          />
          <DetailImageTop dataList={detail} />
          <DetailImageLeft dataList={detail} />
          <DetailImageRight dataList={detail} />
          <DetailImageBottom dataList={detail} />
          <TagBottom
            productId={this.props.match.params.id}
            resultDataList={result}
          />
        </div>
      </>
    );
  }
}

export default ProductDetail;
