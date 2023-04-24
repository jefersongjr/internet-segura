import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import RiskCard from '../components/RiskCard';
import '../styles/SearchResult.css';
import TipCard from '../components/TipCard';

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
      <section className="topContainer">
        <div className="contentTopContainer">
          <div className="textTopContainer">
            <h2 className="title titleTop">Segurança para Adolescentes</h2>
            <p>
              O jovem, entre 10 e 17 anos, já possui um maior entendimento das coisas e,
            </p>
            <p>apesar disso, ainda é necessária a participação dos pais. </p>
            <p>Nesse ponto, a educação deve ser mais forte do que a vigilância.</p>
          </div>
        </div>
      </section>
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
