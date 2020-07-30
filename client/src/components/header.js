import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
  return (
    <header>
      <ul className="main-nav">
        <li><NavLink className="nav-element" exact to="/">Home</NavLink></li>
        <li><NavLink className="nav-element" to="/amsterdam" >Amsterdam</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;