import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import crianca from "../image/criançaPesquisa.jpeg"
import adolescente from "../image/adolescentePesquisa.jpg"
import '../styles/Search.css';

function Search() {
  const { data, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [filter, setFilter] = useState(null);

  const handleClick = ({ target }) => {
    const { innerText } = target;
    console.log(innerText);
    const newFilter = data.filter((type) => type.faixa_etaria === innerText.toLowerCase());
    setFilter(newFilter);
    setSearch(newFilter);
    navigate('/resultado-pesquisa');
  };

  // Verifique se há dados da pesquisa no estado local ao carregar o componente
  useEffect(() => {
    if (filter) {
      // Faça qualquer lógica adicional necessária
      navigate('/resultado-pesquisa');
    }
  }, [filter, navigate]);

  return (
    <div className="Search">
      <section className='container'>
        <div className='button-section'>
          <img src={crianca} width="100%" alt="criança mexendo em tablet" />
        </div>
        <div className='button-container'>
          <p> Principais recomendações</p>
          <p>para crianças entre </p>
          <p>2 e 10 anos.</p>
        <button
        className='button-search childButton'
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        Criança
      </button>
        </div>
      </section>
      <section className='container'>
        <div className='button-container'>
          <p> Principais recomendações</p>
          <p>para crianças entre </p>
          <p> 11 e 17 anos.</p>
        <button
        className='button-search teenButton'
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        Adolescente
      </button>
        </div>
        <div className='button-section'>
          <img src={ adolescente } width="100%" alt="adolescente mexendo em tablet" />
        </div>
      </section>
    </div>
  );
}

export default Search;
