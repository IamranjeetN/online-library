import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
};

export default Navbar;
// // This is the Navbar component of the online library application. It provides navigation links to the home page, browse books page, and add book page. The links are styled as a simple navigation bar.