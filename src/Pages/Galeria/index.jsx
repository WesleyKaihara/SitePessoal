import style from './style.module.scss';

import Card from '../../Components/Card';

import Bootcamp from '../../images/Bootcamp.jpg';
import CursoGit from '../../images/CursoGit.png';
import Inventum from '../../images/Inventum2019.webp';
import Torneio from '../../images/FLL.jpg';


export default function Galeria() {
  return (
    <section className={style.portfolio}>
      <h1 className={style.title}>Galeria</h1>
      <div className={style.portfolioContainer}>
        <Card
          link="https://patobranco.pr.gov.br/noticias/inventum/inventum-2019-inicia-nesta-sexta-feira-08/"
          src={Inventum}
          alt="Inventum2019"
          categoria="Evento"
          title="Inventum 2019"
          desc="Feira de Ciência, Tecnologia e Inovação de Pato Branco"
        />
        <Card
          link="https://www.facebook.com/page/225034940883335/search/?q=bootcamp"
          src={Bootcamp}
          alt="Bootcamp"
          categoria="Bootcamp"
          title="Catalisa Lab"
          desc="Programa imersivo voltado à capacitação de jovens profissionais para o mercado de tecnologia."
        />
        <Card
          link="https://bandnewsfmcuritiba.com/torneio-de-robotica-busca-solucoes-logisticas-em-cidades-paranaenses/"
          src={Torneio}
          alt="Torneio Robótica"
          categoria="Torneio"
          title="FLL - 2018, 2019 e 2020"
          desc="Busca de soluções para problemas do dia a dia da sociedade moderna "
        />
        <Card
          src={CursoGit}
          alt="CursoGit"
          categoria="Curso"
          title="Curso de Git e GitHub"
          desc="Criação de repositórios, commits , issues , requests"
        />


      </div>
    </section>
  );
}



