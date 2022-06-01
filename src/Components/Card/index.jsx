import Aos from 'aos';
import { useEffect } from 'react';
import style from './style.module.scss';


export default function Card(props) {

  const { src, alt, desc, categoria, title, link } = props;

  useEffect(() => {
    Aos.init({ durantion: 2000 });
  }, []);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div data-aos="zoom-in" className={`${style.card}`} >
        <img src={src} alt={alt} />
        <div className={style.cardContainer}>
          <p className={style.categoria}>{categoria}</p>
          <h1 className={style.title}>{title}</h1>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </a>

  )
}