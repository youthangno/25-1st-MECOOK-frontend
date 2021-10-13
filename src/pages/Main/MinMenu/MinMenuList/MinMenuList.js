import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MinMenuList.scss';

class MinMenuList extends Component {
  render() {
    const { id, handleShowProductList, handleMouseOverList, name } = this.props;
    return (
      <li
        id={id}
        onClick={handleShowProductList}
        onMouseOver={handleMouseOverList}
      >
        <Link
          to={{ pathname: '/product-category', state: { category: name } }}
          key={id}
        >
          &nbsp;{name}&nbsp;
        </Link>
      </li>
    );
  }
}

export default MinMenuList;
