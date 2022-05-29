import style from './style.module.scss';


export default function ProjetosCard(props) {

  const { src, alt, desc, categoria, title } = props;


  return (
    <a href='/'>
      <div className={`${style.card}`}>
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