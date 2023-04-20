import React, { useContext, useEffect} from 'react';
import SearchContext from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import RiskCard from '../components/RiskCard';
import '../styles/SearchResult.css'
import TipCard from '../components/TipCard';

function SearchResult() {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    search.length === 0 && navigate('/pesquisa');
  });

  return (
    <div className="SearchResult">
    <section className='riskContainer'>
    <h2 className="riskContainerTitle">Principais Ameaças</h2>
      <div className='cardContainer'>
      {search.filter((type) => type.tipo_info === 'riscos')
        .map((risk) => RiskCard(risk.titulo, risk.conteudo)
      )}
      </div>
    </section>
    <section className='riskContainer'>
    <h2 className="riskContainerTitle">Dicas</h2>
    {search.filter((type) => type.tipo_info === 'cuidados')
        .map((tip) => TipCard(tip.img_url,tip.img_url, tip.titulo, tip.conteudo)
      )}
    </section>
    </div>
  )
}

export default SearchResult