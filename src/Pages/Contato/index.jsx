import style from './style.module.scss';


export default function Contato() {
  return (
    <section className={style.contato}>
      <h1 className={style.title}>Entre em Contato</h1>
      <div className={style.contato_container}>
        <h2 className={style.subTitle}>E-mail</h2>
        <a href="mailto:Wesleykaihara@gmail.com">
          <p className={style.contato_item}>Wesleykaihara@gmail.com</p>
        </a>

        <h2 className={style.subTitle}>Telefone</h2>
        <a href="tel:+5544997401925">
          <p className={style.contato_item}>(44) 9 9740-1925</p>
        </a>

        <h2 className={style.subTitle}>Linkedin</h2>
        <a href="https://www.linkedin.com/in/wesleykaihara/" target="_blank" rel="noreferrer">
          <p className={style.contato_item}>Wesleykaihara</p>
        </a>

      </div>
    </section>
  )
}