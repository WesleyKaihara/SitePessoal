import style from './style.module.scss';

import { faJsSquare, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../../Components/Avatar';

export default function Sobre() {
  return (
    <section className={style.sobre}>
      <h1 className={style.title}>Quem sou </h1>
      <div className={style.sobreContainer}>
        <div className={style.tecnologias}>
          <h2>Tecnologias <FontAwesomeIcon icon={faCode} /></h2>
          <ul>
            <li><FontAwesomeIcon icon={faSass} className={style.icon} /> Sass</li>
            <li><FontAwesomeIcon icon={faDatabase} className={style.icon} /> Mysql</li>
            <li><FontAwesomeIcon icon={faNode} className={style.icon} /> Nodejs</li>
            <li><FontAwesomeIcon icon={faReact} className={style.icon} /> React JS</li>
            <li><FontAwesomeIcon icon={faJsSquare} className={style.icon} /> Javascript</li>


          </ul>
        </div>
        <Avatar />
        <div className={style.sobreInfo}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse similique incidunt tenetur voluptates temporibus nihil, officiis expedita quia animi hic. Quaerat expedita eligendi saepe nisi delectus incidunt laudantium doloremque iusto.</p>
        </div>
      </div>

    </section>
  );
}



