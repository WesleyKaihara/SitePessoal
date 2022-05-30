import style from './style.module.scss';

import Card from '../../Components/Card';

import CloneYoutube from '../../images/Portfolio/CloneYoutube.png';
import CloneFacebook from '../../images/Portfolio/facebook.png';
import LandingPageSp from '../../images/Portfolio/LandingPageSp.png';
import Pokedex from '../../images/Portfolio/Pokedex.png';


export default function Galeria() {
  return (
    <section className={style.portfolio}>
      <h1 className={style.title}>Galeria</h1>
      <div className={style.portfolioContainer}>
        <Card
          src={CloneYoutube}
          alt="Clone Interface"
          categoria="Clone Interface"
          title="Interface Youtube"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={CloneFacebook}
          alt="CloneFacebook"
          categoria="Clone Interface"
          title="Interface Facebook"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={LandingPageSp}
          alt="Cidade SãoPaulo"
          categoria="LandingPage"
          title="Cidade SãoPaulo"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={Pokedex}
          alt="pokedex"
          categoria="API"
          title="Pokedex"
          desc="Loreadasnd jicjeqwjciejj"
        />

      </div>
    </section>
  );
}



