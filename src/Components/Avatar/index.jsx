import style from './style.module.scss';

import Perfil from '../../images/Perfil.png';

export default function Avatar() {
  return (
    <div className={style.avatar}>
      <div className={style.box}>
        <div className={style.content}>
          <img src={Perfil} alt="Perfil" />
          <h2>W3sley Kaihara <br /> <span>Web Developer</span></h2>
          <a href="https://www.linkedin.com/in/wesleykaihara/" target="_blank" rel="noreferrer" >Ver Mais</a>
        </div>
      </div>
    </div>
  )
}