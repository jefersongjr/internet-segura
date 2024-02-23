import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import menu from '../image/menu.png';
import { Helmet } from 'react-helmet';
import '../styles/Header.css';
import SearchContext from '../context/SearchContext';

function Header() {
  const { isActive, setIsActive } = useContext(SearchContext);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Helmet>
        <title>Internet Segura</title>
        {/* Adicione as tags do cabeçalho conforme necessário */}
        <link rel="icon" type="image/png" sizes="32x32" href={logo} />
      </Helmet>
      <div className="headerContainer">
        <img src={ logo } alt="logo internet segura" width="100px" />
        <nav className="navbar">
          <Link to="/">Início</Link>
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
