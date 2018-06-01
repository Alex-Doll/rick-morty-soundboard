import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/Rick-and-Morty-logo.png';
import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link className="image-link" to="/">
      <img id="home-image" src={logo} alt="Home" />
    </Link>
    <Link className="text-link" to="/about">About</Link>
  </nav>
);

export default Navbar;