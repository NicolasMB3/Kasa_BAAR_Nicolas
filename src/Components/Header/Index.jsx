import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Index.jsx'
import HeaderStyle from "./Style.jsx";

function Header() {
  return (
    <HeaderStyle>
      <Logo className="header__logo" />
      <nav>
        <NavLink className="header__nav" exact to="/" activeClassName="active">Accueil</NavLink>
        <NavLink className="header__nav" to="/About" activeClassName="active">À propos</NavLink>
      </nav>
    </HeaderStyle>
  );
}

export default Header;