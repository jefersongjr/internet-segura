import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import cadeado from '../image/cadeado.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="textContainer">
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
      <div>
        <section className="imgContainerTop">
          <img
            src={ cadeado }
            alt="cadeado no notebook"
            className="imgHome"
          />
        </section>
        <div className="imgDivision">
          {' '}
        </div>
      </div>

    </div>

  );
}

export default Home;
