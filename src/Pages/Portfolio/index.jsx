import style from './style.module.scss';

import Card from '../../Components/Card';

// import CloneYoutube from '../../images/Portfolio/CloneYoutube.png';
// import CloneFacebook from '../../images/Portfolio/facebook.png';
// import CloneKabum from '../../images/Portfolio/CloneKabum.png';
// import LandingPageSp from '../../images/Portfolio/LandingPageSp.png';
// import Pokedex from '../../images/Portfolio/Pokedex.png';
// import PrevisaoTempo from '../../images/Portfolio/PrevisaoTempo.png';


// import Desafio01 from '../../images/Portfolio/Desafio01.png';
import Aos from 'aos';
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function Portfolio() {

  const [projetos, setProjetos] = useState();

  useEffect(() => {
    Aos.init({ durantion: 2000 });

    axios.get("http://localhost/PerfilPessoalServer")
      .then(res => {
        console.log(res.data);
        setProjetos(res.data);
      });

  }, []);


  return (
    <section className={style.portfolio}>
      <h1 className={style.title} data-aos="flip-down">Portfólio</h1>
      <div className={style.portfolioContainer}>


        {
          ((typeof projetos === 'undefined') ? (
            <tr><td>Loading ... </td></tr>
          ) : (
            projetos.map((projeto) => {
              return (
                <Card
                  key={projeto.ID}
                  src={`http://localhost/PerfilPessoalServer/getImagem.php?id=${projeto.ID}`}
                  alt={projeto.TITULO}
                  categoria={projeto.CATEGORIA}
                  title={projeto.TITULO}
                  desc={projeto.DESCRICAO}
                />
              )
            })
          )
          )
        }

        {/* <Card
          src={CloneYoutube}
          alt="Clone Interface"
          categoria="Clone Interface"
          title="Interface Youtube"
          desc="Página Principal e de video com ReactJs"
        />
        <Card
          src={CloneFacebook}
          alt="CloneFacebook"
          categoria="Clone Interface"
          title="Interface Facebook"
          desc="Feed Facebook utilizando ReactJs e Material UI"
        />
        <Card
          src={LandingPageSp}
          alt="Cidade SãoPaulo"
          categoria="LandingPage"
          title="Cidade SãoPaulo"
          desc="Página Sobre a cidade de São Paulo com animações utilizando ReactJS"
        />
        <Card
          src={Pokedex}
          alt="pokedex"
          categoria="API"
          title="Pokedex"
          desc="Fetch Api com dados de Pokemons"
        />

        <Card
          src={Desafio01}
          alt="LandingPage"
          categoria="FrontendMentor"
          title="LandingPage"
          desc="Desafio FrontEndMentor , criação de landingPage"
        />
        <Card
          src={PrevisaoTempo}
          alt="Sistema Previsao tempo"
          categoria="API"
          title="Sistema Previsao tempo"
          desc="Requisição em API de Previsões do Tempo"
        />
        <Card
          src={CloneKabum}
          alt="Clone kabum"
          categoria="Clone Interface"
          title="Clone Interface kabum"
          desc="Página principal site de vendas Kabum utilizando ReactJs"
        /> */}

        <a href="/novoProjeto">
          <div className={style.newItem} data-aos="zoom-in">
            <h2>Adicionar Projeto</h2>
          </div>
        </a>

      </div>
    </section>
  );
}



