import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
      <div className="topnav__bar">
        <div className="navlinks">
          <Link to="/" className="logo__text">
            Bookstore CMS
          </Link>
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
