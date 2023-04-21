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
    <section className='riskContainer containers'>
    <h2 className="riskContainerTitle title">Principais Ameaças</h2>
      <div className='cardContainer'>
      {search.filter((type) => type.tipo_info === 'riscos')
        .map((risk) => RiskCard(risk.titulo, risk.conteudo)
      )}
      </div>
    </section>
    <section className='tipContainer containers'>
    <h2 className="tipContainerTitle title">Como Previnir</h2>
    <div className='cardTipContainer'>
    {search.filter((type) => type.tipo_info === 'cuidados')
        .map((tip) => TipCard(tip.img_url, tip.titulo, tip.conteudo)
      )}
    </div>
    </section>
    </div>
  )
}

export default SearchResult