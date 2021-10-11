import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
      isLogin: false,
      // navList: [
      //   {
      //     title: 'DINING',
      //     path: '/',
      //   },
      //   {
      //     title: 'CAFE',
      //     path: '/',
      //   },
      //   {
      //     title: 'CUPBOARD',
      //     path: '/',
      //   },
      //   {
      //     title: 'GOURMET',
      //     path: '/',
      //   },
      //   {
      //     title: 'LIFE',
      //     path: '/',
      //   },
      //   {
      //     title: 'ARCHIVE',
      //     path: '/',
      //   },
      // ],
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

    if (!localStorage.getItem('userToken')) {
      this.setState({
        isLogin: false,
      });
    } else {
      this.setState({
        isLogin: true,
      });
    }
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

  handleLog = () => {
    if (localStorage.getItem('userToken') && this.state.isLogin) {
      this.setState({
        isLogin: false,
      });
      localStorage.removeItem('userToken');
    }
  };

  render() {
    const { scrollTop } = this.state;
    console.log(this.state);
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
          <div className="logo">
            <Link to="/">MECOOK</Link>
          </div>
          <div className="menu">
            {/* {this.state.navList.map((p, i) => (
              <Link to={p.path} key={i} className="menuBtn">
                {p.title}
              </Link>
            ))} */}

            <Link to="/n" className="menuBtn">
              DINING
            </Link>
            <Link to="/n" className="menuBtn">
              CAFE
            </Link>
            <Link to="/n" className="menuBtn">
              CUPBOARD
            </Link>
            <Link to="/n" className="menuBtn">
              GOURMET
            </Link>
            <Link to="/n" className="menuBtn">
              LIFE&#8314;
            </Link>
            <Link to="/n" className="menuBtn">
              ARCHIVE
            </Link>
          </div>
          <div className="login">
            <button className="loginBtn" onClick={this.handleLog}>
              {this.state.isLogin ? 'L O G O U T' : 'L O G I N'}
            </button>
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
