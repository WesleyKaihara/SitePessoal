import style from './style.module.scss';

import { faJsSquare, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

import Perfil from '../../images/Perfil.png';

export default function Sobre() {
  return (
    <section className={style.sobre}>
      <h1 className={style.title}>Quem sou </h1>
      <div className={style.sobreContainer}>
        <div className={style.tecnologias}>
          <h2>Tecnologias <FontAwesomeIcon icon={faCode} /></h2>
          <ul>
            <li><FontAwesomeIcon icon={faReact} className={style.icon} /> React JS</li>
            <li><FontAwesomeIcon icon={faNode} className={style.icon} /> Nodejs</li>
            <li><FontAwesomeIcon icon={faJsSquare} className={style.icon} /> Javascript</li>
            <li><FontAwesomeIcon icon={faDatabase} className={style.icon} /> Mysql</li>
          </ul>
        </div>
        <img src={Perfil} alt="Perfil" className={style.Perfil} />
        <div className={style.sobreInfo}>
        </div>
      </div>

    </section>
  );
}



