import React from 'react';
import '../styles/About.css';
import imgSobre from '../image/about.jpg';

function About() {
  return (
    <div className="About">
      <div className="imgAboutContainer">
        <img src={ imgSobre } alt="criança com tablet" />
      </div>
      <div className="textAboutContainer">
        <h1>Sobre o projeto: </h1>
        <div>
          <p> Esse site faz parte do meu projeto de Trabalho de conclusão de curso.
            A tecnologia está em constante evolução e os jovens estão cada vez mais</p>
          <p>imersos nesse ambiente, estando assim, expostos aos seus benefícios
            e seus malefícios.</p>
          <p>A ideia principal desse projeto, é ajudar pais e responsáveis,  a manter 
            a internet um lugar de aprendizado seguro, e preservando a integridade
            física e mental de suas crianças.</p>
        </div>
      </div>
    </div>

  );
}

export default About;