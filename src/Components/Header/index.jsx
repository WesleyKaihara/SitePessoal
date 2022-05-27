import style from './style.module.scss';


export default function Header() {
  return (
    <header>
      <header className={style.header}>
        <a href="index.html">
          <h1 className={style.Logo}>W3sley </h1>
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/portifolio">Portifólio</a></li>
            <li><a href="/eventos">Galeria</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    </header>
  )
}