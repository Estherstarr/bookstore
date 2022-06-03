import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navClass">
      <Link to="/">Books</Link>
      <Link to="/categories">
        Categories
      </Link>
    </nav>
  );
}
export default Navbar;
