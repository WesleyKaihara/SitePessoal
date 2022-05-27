import style from './style.module.scss';

import Card from '../../Components/Card';

import CloneYoutube from '../../images/Portifolio/CloneYoutube.png';
import CloneFacebook from '../../images/Portifolio/facebook.png';
import CloneKabum from '../../images/Portifolio/CloneKabum.png';
import LandingPageSp from '../../images/Portifolio/LandingPageSp.png';
import Pokedex from '../../images/Portifolio/Pokedex.png';
import PrevisaoTempo from '../../images/Portifolio/PrevisaoTempo.png';


import Desafio01 from '../../images/Portifolio/Desafio01.png';

export default function Portifolio() {
  return (
    <section className={style.portifolio}>
      <h1 className={style.title}>Portifólio</h1>
      <div className={style.portifolioContainer}>
        <Card
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
        />

      </div>
    </section>
  );
}



