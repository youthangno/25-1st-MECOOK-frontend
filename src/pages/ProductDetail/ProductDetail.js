import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import './ProductDetail.scss';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailImageTop from './DetailImageTop/DetailImageTop';
import DetailImageLeft from './DetailImageLeft/DetailImageLeft';
import DetailImageRight from './DetailImageRight/DetailImageRight';
import DetailImageBottom from './DetailImageBottom/DetailImageBottom';
import TagBottom from './TagBottom/TagBottom';
class ProductDetail extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="productDetail">
          <ProductExplan />
          <ProductInfo />
          <DetailImageTop />
          <DetailImageLeft />
          <DetailImageRight />
          <DetailImageBottom />
          <TagBottom />
        </div>
        ;
      </>
    );
  }
}

export default ProductDetail;
