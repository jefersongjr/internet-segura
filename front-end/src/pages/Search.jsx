import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import crianca from "../image/criançaPesquisa.jpeg"
import adolescente from "../image/adolescentePesquisa.jpg"
import '../styles/Search.css';

function Search() {
  const { data, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = ({ target }) => {
    const { innerText } = target;
    const filter = data.filter((type) => type.faixa_etaria === innerText.toLowerCase());
    localStorage.setItem("filter", JSON.stringify(filter));
    setSearch(filter);
    navigate('/resultado-pesquisa');
  };

  // Verifique se há dados da pesquisa armazenados no localStorage ao carregar o componente
  useEffect(() => {
    const storedFilter = localStorage.getItem("filter");
    if (storedFilter) {
      setSearch(JSON.parse(storedFilter));
      navigate('/resultado-pesquisa');
    }
  }, [setSearch, navigate]);

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
          <img src={adolescente} width="100%" alt="criança mexendo em tablet" />
        </div>
      </section>
    </div>
  );
}

export default Search;
