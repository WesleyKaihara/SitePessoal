import style from './style.module.scss';

import Card from '../../Components/Card';

import CloneYoutube from '../../images/Portifolio/CloneYoutube.png';


export default function Portifolio() {
  return (
    <section className={style.portifolio}>
      <h1 className={style.title}>Portifólio</h1>
      <div className={style.portifolioContainer}>
        <Card
          src={CloneYoutube}
          alt="Imagem"
          categoria="Sistema"
          title="Teste"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={CloneYoutube}
          alt="Imagem"
          categoria="Sistema"
          title="Teste"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={CloneYoutube}
          alt="Imagem"
          categoria="Sistema"
          title="Teste"
          desc="Loreadasnd jicjeqwjciejj"
        />
        <Card
          src={CloneYoutube}
          alt="Imagem"
          categoria="Sistema"
          title="Teste"
          desc="Loreadasnd jicjeqwjciejj"
        />

        <Card
          src={CloneYoutube}
          alt="Imagem"
          categoria="Sistema"
          title="Teste"
          desc="Loreadasnd jicjeqwjciejj"
        />
      </div>
    </section>
  );
}



