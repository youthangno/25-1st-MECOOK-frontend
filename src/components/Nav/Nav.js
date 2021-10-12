import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <>
        <nav
          className={!scrollTop ? 'original_header' : 'change_header'}
          onScroll={this.handleScroll}
        >
          <div className="threeLine">
            <Link to="/minmenu">
              <i className="fas fa-bars"></i>
            </Link>
            MECOOK
          </div>
          <div className="logo">MECOOK</div>
          <div className="menu">
            <Link to="/" className="menuBtn">
              DINING
            </Link>
            <Link to="/" className="menuBtn">
              CAFE
            </Link>
            <Link to="/" className="menuBtn">
              CUPBOARD
            </Link>
            <Link to="/" className="menuBtn">
              GOURMET
            </Link>
            <Link to="/" className="menuBtn">
              LIFE&#8314;
            </Link>
            <Link to="/n" className="menuBtn">
              ARCHIVE
            </Link>
          </div>
          <div className="login">
            <button>L O G I N</button>
            <Link to="/n">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
