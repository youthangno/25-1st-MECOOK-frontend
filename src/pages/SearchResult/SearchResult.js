import React, { Component } from 'react';
import ProductPreview from '../ProductList/ProductPreview/ProductPreview';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      searchResult: [],
      productList: [],
    };
  }

  componentDidMount() {
    // fetch(
    //   'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail'
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       productList: data.result,
    //     });
    //   });

    fetch('data/bestMenuData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result,
        });
      });
  }

  handleInput = e => {
    this.setState({ inputData: e.target.value });
  };

  refreshInput = () => {
    this.setState({ inputData: '' });
  };

  // handleBtnSearch = () => {
  //   fetch('https://f960-211-106-114-186.ngrok.io/{product}/search', {
  //     method: 'POST',
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         searchResult: result,
  //       });
  //     });
  // };

  render() {
    return (
      <div className="result">
        <div className="resultHeader">
          <div className="resultHeaderBox">
            <div className="resultInput">
              <input
                type="text"
                className="searchInput"
                placeholder="SEARCH"
                onChange={this.handleInput}
                value={this.state.inputData}
              />
              <i className="fas fa-ban" onClick={this.refreshInput}></i>
              <i className="fas fa-search" onClick={this.handleBtnSearch}></i>
            </div>
            <p>
              <em className="resultContent">샐러드</em>에 대해{' '}
              <em className="resultContent">
                총 {this.state.productList.length}건
              </em>
              의 검색결과가 있습니다.
            </p>
          </div>
        </div>
        <div className="resultList">
          {this.state.productList &&
            this.state.productList.map(list => {
              const {
                id,
                mainImage,
                category,
                name,
                cookingTime,
                serving,
                like,
                this_user_like,
              } = list;
              return (
                <ProductPreview
                  key={id}
                  productId={id}
                  mainImage={mainImage}
                  category={category}
                  name={name}
                  cookingTime={cookingTime}
                  serving={serving}
                  like={like}
                  userLike={this_user_like}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
