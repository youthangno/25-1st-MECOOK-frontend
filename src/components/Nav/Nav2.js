import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav2.scss';

function Nav2() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <>
      <nav className={!scrollPosition ? 'original_header' : 'change_header'}>
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
    </>
  );
}

export default Nav2;
