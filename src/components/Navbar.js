import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/Rick-and-Morty-logo.png';
import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <img src={logo} alt="Home" />
    </Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;