import React from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

// detail page에서 this.props.productId로 받을 부분
//const productID = 21;

const TOKEN = localStorage.getItem('token');

class Cart extends React.Component {
  state = {
    cartList: [],
    isAllChecked: false,
  };

  // 로그인한 유저의 장바구니 list GET
  componentDidMount() {
    if (TOKEN) {
      fetch(`data/Cart/cartData.json`, {
        method: 'GET',
        headers: {
          Authorization: TOKEN,
        },
      })
        .then(res => res.json())
        .then(data => this.setState({ cartList: data }));
    }
  }

  // 로그인한 유저가 장바구니에 추가했을 때 다시 list GET
  componentDidUpdate(prevProps) {
    // productDetail 페이지에서 상품 추가 버튼 눌렀을 때, 이 컴포넌트로 갱신된 productList를 props로 보내줌
    if (prevProps.productList !== this.props.productList) {
      if (TOKEN) {
        fetch(`data/Cart/cartData.json`, {
          method: 'GET',
          headers: {
            Authorization: TOKEN,
          },
        })
          .then(res => res.json())
          .then(data => this.setState({ cartList: data }));
      }
    }
  }

  toggleAllChecked = () => {
    this.setState({ isAllChecked: !this.state.isAllChecked });
  };

  deleteCartItem = itemId => {
    const deletedCartList = this.state.cartList.filter(
      item => item.id !== itemId
    );

    this.setState({ cartList: deletedCartList });
  };

  render() {
    // login과 merge 시 삭제
    // localStorage.setItem(
    //   'token',
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s'
    // );

    let totalPrice = 0;
    const prices = this.state.cartList.map(item => Number(item.price));
    prices.forEach(item => (totalPrice += item));

    return (
      <div className="cartContainer">
        <h1 className="cartTitle">Cart</h1>
        {this.state.cartList.length > 0 ? (
          <ul className="cartList">
            {this.state.cartList
              ? this.state.cartList.map(cartItem => {
                  const { id, image, category, name, price } = cartItem;
                  return (
                    <CartItem
                      key={id}
                      id={id}
                      image={image}
                      category={category}
                      name={name}
                      price={price}
                      isAllChecked={this.state.isAllChecked ? true : false}
                      deleteCartItem={this.deleteCartItem}
                    />
                  );
                })
              : null}
          </ul>
        ) : (
          <EmptyCart />
        )}
        <input
          className="checkAllBox"
          type="checkbox"
          name="checkAllBox"
          checked={this.state.isAllChecked}
          onChange={this.toggleAllChecked}
        />
        <span className="checkAllLabel">전체선택</span>
        <div className="cartTotal">
          <p className="totalCount">
            TOTAL<span>{this.state.cartList.length}</span>
          </p>
          <p className="totalPrice">
            <i className="fas fa-won-sign"></i>
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <button className="btnOrder">BUY NOW</button>
      </div>
    );
  }
}

export default Cart;
