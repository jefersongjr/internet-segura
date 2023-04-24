import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={ logo } alt="logo internet segura" width="100px" />
      <nav>
        <Link to="/inicio">Início</Link>
        <Link to="/pesquisa">Aprenda</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
