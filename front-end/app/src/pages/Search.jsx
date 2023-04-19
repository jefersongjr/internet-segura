import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';

function Search() {
  const { data, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = ({ target }) => {
    const { innerText } = target;
    const filter = data.filter((type) => type.faixa_etaria === innerText.toLowerCase());
    setSearch(filter);
    navigate('/resultado-pesquisa');
  };

  return (
    <div className="Search">
      <button
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        Criança
      </button>
      <button
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        Adolescente
      </button>
    </div>
  );
}

export default Search;
