import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import menu from '../image/menu.png';
import '../styles/Header.css';
import SearchContext from '../context/SearchContext';

function Header() {
  const { isActive, setIsActive } = useContext(SearchContext);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <img src={ logo } alt="logo internet segura" width="100px" />
        <nav className="navbar">
          <Link to="/inicio">Início</Link>
          <Link to="/pesquisa">Aprenda</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
        <button
          type="button"
          className="menuNavBar"
          onClick={ handleClick }
        >
          <img src={ menu } alt="menu from icon8" />
        </button>
      </div>
    </header>
  );
}

export default Header;
