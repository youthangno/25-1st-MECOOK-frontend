import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <div className="main"></div>
      </>
    );
  }
}

export default Main;
