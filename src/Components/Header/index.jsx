import style from './style.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {

  const [Menu, setMenu] = useState("");

  return (
    <header>
      <header className={style.header}>
        <a href="index.html">
          <h1 className={style.Logo}>W3sley </h1>
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className={style.Menu}
          onClick={() => (Menu === "") ? setMenu(style.Menu) : setMenu("")}
        />
        <nav className={Menu}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/portfolio">Portfólio</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    </header>
  )
}