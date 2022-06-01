import Aos from 'aos';
import { useEffect } from 'react';
import style from './style.module.scss';


export default function CardProjeto3d(props) {

  const { src, alt } = props;

  useEffect(() => {
    Aos.init({ durantion: 2000 });
  }, []);

  return (
    <div data-aos="zoom-in" className={`${style.card}`} >
      <img src={src} alt={alt} />
      <div className={style.cardContainer}>
      </div>
    </div>
  )
}