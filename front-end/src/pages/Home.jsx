import React from 'react';
import '../styles/Home.css';
import cadeado from '../image/cadeado.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="textContainer">
        <div>
          <p>Aprenda a transformar</p>
          <p>a Internet em um</p>
          <p className="greenText">ambiente mais seguro</p>
          <p>para as Crianças</p>
          <button
            type="button"
            className="buttonInit"
            onClick={ () => navigate('pesquisa') }
          >
            Aprender
          </button>
        </div>
      </div>
      <div className="imgContainer">
        <section className="imgContainerTop">
          <img src={ cadeado } alt="imagem de um cadeado" />
        </section>
      </div>
    </div>

  );
}

export default Home;
