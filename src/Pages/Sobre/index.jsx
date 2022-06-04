import style from './style.module.scss';

import { faHtml5, faJsSquare, faNode, faPhp, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../../Components/Avatar';
import CardProjeto3d from './CardProj3d';

//Imagens Projetos 3D
import quarto01 from '../../images/Projetos3D/quarto01.png';
import quarto02 from '../../images/Projetos3D/quarto02.png';
import edicula from '../../images/Projetos3D/edicula.png';
import ilhaVoadora from '../../images/Projetos3D/ilhavoadora.png';
import Gol from '../../images/Projetos3D/GOL.png';
import Poste from '../../images/Projetos3D/poste.png';
import LulaMolusco from '../../images/Projetos3D/cursoDomestika.png';

export default function Sobre() {
  return (
    <section className={style.sobre}>
      <h1 className={style.title}>Quem sou </h1>
      <div className={style.sobreContainer}>
        <div className={style.avatarContainer}>
          <Avatar />
        </div>
        <div className={style.sobreInfo}>
          <p>Atualmente cursando Tecnologia em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Integrado.<br /><br />
            Durante os anos de 2018 e 2020 fiz parte de equipes de robótica pelo Colégio SESI , onde tive um grande contato com Mundo da Programação e criação de ideias para resolução de problemas modernos.<br /><br />
            Em 2021 realizei um BootCamp no Integrado , onde aprendi diversas tecnologias ligadas ao desenvolvimento web como Javascript, ReactJs, Banco de Dados e NodeJs. E atualmente crio pequenos sistemas para aprender novas funcionalidades, linguagens e praticar meus conhecimentos. Também gosto de criar modelos 3d no software blender, como personagens , construções e principalmente interiores.
          </p>
        </div>
        <div className={style.tecnologias}>
          <h2>Tecnologias <FontAwesomeIcon icon={faCode} /></h2>
          <ul>
            <li><FontAwesomeIcon icon={faPhp} className={style.icon} /> PHP</li>
            <li><FontAwesomeIcon icon={faSass} className={style.icon} /> Sass</li>
            <li><FontAwesomeIcon icon={faHtml5} className={style.icon} /> HTML5</li>
            <li><FontAwesomeIcon icon={faDatabase} className={style.icon} /> Mysql</li>
            <li><FontAwesomeIcon icon={faNode} className={style.icon} /> Nodejs</li>
            <li><FontAwesomeIcon icon={faReact} className={style.icon} /> React JS</li>
            <li><FontAwesomeIcon icon={faJsSquare} className={style.icon} /> Javascript</li>
          </ul>
        </div>
      </div>

      <section className={style.projetos3d}>
        <h1 className={style.title}>Projetos 3d</h1>
        <div className={style.projetos3dContainer}>
          <CardProjeto3d src={ilhaVoadora} alt="ilhaVoadora" />
          <CardProjeto3d src={quarto01} alt="quartoModerno" />
          <CardProjeto3d src={quarto02} alt="quartoModerno2" />
          <CardProjeto3d src={edicula} alt="edicula" />
          <CardProjeto3d src={Gol} alt="GolVW" />
          <CardProjeto3d src={Poste} alt="Poste e Banco" />
          <CardProjeto3d src={LulaMolusco} alt="LulaMolusco" />
        </div>
      </section>
    </section>
  );
}



