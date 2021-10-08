import React, { Component } from 'react';
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
        &nbsp;{name}&nbsp;
      </li>
    );
  }
}

export default MinMenuList;
