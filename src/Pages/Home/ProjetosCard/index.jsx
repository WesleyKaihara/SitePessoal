import style from './style.module.scss';

import Aos from 'aos';
import { useEffect } from 'react';

export default function ProjetosCard(props) {

  const { src, alt, desc, categoria, title, data_aos } = props;

  useEffect(() => {
    Aos.init({ durantion: 4000 });
  }, []);

  return (
    <a href='/'>
      <div className={`${style.card}`} data-aos={data_aos}>
        <div className={style.face} >
          <img src={src} alt={alt} />
          <p className={style.categoria}>{categoria}</p>
          <h1 className={style.title}>{title}</h1>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </a>

  )
}