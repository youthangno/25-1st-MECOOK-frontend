import React from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

// detail page에서 this.props.productId로 받을 부분
//const productList = [];

const TOKEN = localStorage.getItem('token');

class Cart extends React.Component {
  state = {
    cartList: [],
    checkedItemList: [],
    totalPrice: 0,
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

  // 총 상품 가격 계산하는 함수
  getTotalPrice = () => {
    const orderList = this.state.cartList.filter(item =>
      this.state.checkedItemList.includes(item.id)
    );

    const orderPriceList = orderList.map(item => Number(item.price));
    let totalPrice = 0;
    orderPriceList.map(item => (totalPrice += item));

    this.setState({ totalPrice: totalPrice });
  };

  // check한 아이템들 담는 배열 만들어서 체크한 상품 총가격 set
  handleItemCheck = itemId => {
    const getTotalPrice = () => {
      this.getTotalPrice();
    };

    if (this.state.checkedItemList.includes(itemId)) {
      const deleteItem = this.state.checkedItemList.filter(
        item => item !== itemId
      );
      this.setState({ checkedItemList: deleteItem }, getTotalPrice);
    } else {
      const newItem = this.state.checkedItemList.concat(itemId);
      this.setState({ checkedItemList: newItem }, getTotalPrice);
    }
  };

  // allCheck했을 때 모든 상품 추가, allUnCheck했을 때 모든 상품 삭제하고 총 가격 set
  handleItemAllCheck = () => {
    const getTotalPrice = () => {
      this.getTotalPrice();
    };

    if (this.state.cartList.length === this.state.checkedItemList.length) {
      this.setState({ checkedItemList: [] }, getTotalPrice);
    } else {
      const allItem = [];
      this.state.cartList.map(item => allItem.push(item.id));
      this.setState({ checkedItemList: allItem }, getTotalPrice);
    }
  };

  deleteCartItem = itemId => {
    const deletedCartList = this.state.cartList.filter(
      item => item.id !== itemId
    );

    this.setState({ cartList: deletedCartList });

    // 장바구니 삭제시 POST할 API
    // if (TOKEN) {
    //   fetch(`data/Cart/cartData.json`, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: TOKEN,
    //     },
    //     body: JSON.stringify({
    //       user: '',
    //       product: '',
    //     }),
    //   });
    // }
  };

  orderProduct = () => {
    if (TOKEN) {
      const restPoint = this.props.point - this.state.totalPrice;
      alert('주문이 완료되었습니다!');

      // 포인트 차감하고, 남은 포인트 서버에 보내는 API
      // fetch('api', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: localStorage.getItem('token'),
      //   },
      //   body: JSON.stringify({
      //     point: restPoint,
      //   }),
      // });
    } else {
      alert('로그인 해주세요.');
    }
  };

  render() {
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
                      isChecked={this.state.checkedItemList.includes(id)}
                      handleItemCheck={this.handleItemCheck}
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
          onChange={this.handleItemAllCheck}
        />
        <span className="checkAllLabel">전체선택</span>
        <div className="cartTotal">
          <p className="totalCount">
            TOTAL<span>{this.state.cartList.length}</span>
          </p>
          <p className="totalPrice">
            <i className="fas fa-won-sign"></i>
            {this.state.totalPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <button className="btnOrder" onClick={this.orderProduct}>
          BUY NOW
        </button>
      </div>
    );
  }
}

export default Cart;
