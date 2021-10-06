import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.getDropdownMenuData();
    this.getIconData();
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    this.setState({
      isNavTransparent: !window.pageYOffset > 0,
    });
  };

  render() {
    return (
      <nav id="mainNav">
        <div className="logo">MECOOK</div>
        <div className="menu">
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
          <button>L O G I N</button>
          <Link to="/n">
            <i className="fas fa-search"></i>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
