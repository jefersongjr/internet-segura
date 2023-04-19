import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://internet-segura-api.vercel.app/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
