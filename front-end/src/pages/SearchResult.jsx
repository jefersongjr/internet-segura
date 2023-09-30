import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import RiskCard from '../components/RiskCard';
import '../styles/SearchResult.css';
import TipCard from '../components/TipCard';
import TeenContainer from '../components/TeenContainer';
import ChildContainer from '../components/ChildContainer';

function SearchResult() {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const backToSelectSearch = () => {
      const nav = search.length === 0 && navigate('/pesquisa');
      return nav;
    };
    backToSelectSearch();
  });

  return (
    <div className="SearchResult">
      {
        search[0]?.faixa_etaria === 'adolescente' ? <TeenContainer /> : <ChildContainer />
      }
      <section className="riskContainer containers">
        <h2 className="riskContainerTitle title">Principais Ameaças</h2>
        <div className="cardContainer">
          {search.filter((type) => type.tipo_info === 'riscos')
            .map((risk) => RiskCard(risk.titulo, risk.conteudo))}
        </div>
      </section>
      <section className="tipContainer containers">
        <h2 className="tipContainerTitle title">Como Previnir</h2>
        <div className="cardTipContainer">
          {search.filter((type) => type.tipo_info === 'cuidados')
            .map((tip) => TipCard(tip.img_url, tip.titulo, tip.conteudo))}
        </div>
      </section>
    </div>
  );
}

export default SearchResult;
