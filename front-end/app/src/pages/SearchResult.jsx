import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import RiskCard from '../components/RiskCard';

function SearchResult() {
  const { search } = useContext(SearchContext);

  return (
    <div className="SearchResult"> 
    <section className='riskContainer'>
      {search.filter((type) => type.tipo_info === 'riscos')
        .map((risk) => RiskCard(risk.titulo, risk.conteudo)
      )}
    </section>
    </div>
  )
}

export default SearchResult