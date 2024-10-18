import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Food Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Foods Lists
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Food
        </NavLink>
      </div>
    </header>
  );
};

export default Header;