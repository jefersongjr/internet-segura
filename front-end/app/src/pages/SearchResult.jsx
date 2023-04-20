import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import RiskCard from '../components/RiskCard';
import '../styles/SearchResult.css'

function SearchResult() {
  const { search } = useContext(SearchContext);

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
    </section>
    </div>
  )
}

export default SearchResult