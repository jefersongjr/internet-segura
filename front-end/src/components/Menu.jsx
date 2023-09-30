import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Menu.css';
import SearchContext from '../context/SearchContext';

function Menu() {
  const { isActive, setIsActive } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = (path) => {
    const nav = navigate(path);
    setIsActive(false);
    return nav;
  };

  return (
    <div
      className={ `Menu ${!isActive ? 'hiddenMenu' : 'menuVisivel'}` }
    >
      <nav className="navHiddenMenu">
        <button
          type="button"
          className="buttonMenu"
          onClick={ () => handleClick('/') }
        >
          Início
        </button>
        <button
          type="button"
          className="buttonMenu"
          onClick={ () => handleClick('/pesquisa') }
        >
          Aprenda
        </button>
        <button
          type="button"
          className="buttonMenu"
          onClick={ () => handleClick('/sobre') }
        >
          Sobre
        </button>
      </nav>
    </div>
  );
}

export default Menu;
