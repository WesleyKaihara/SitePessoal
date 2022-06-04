import style from './style.module.scss';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contato() {

  return (
    <section className={style.contato}>
      <h1 className={style.title}>Entre em Contato</h1>
      <div className={style.contato_container}>
        <div className={style.contatosContent}>
          <h2 className={style.subTitle}> <FontAwesomeIcon icon={faEnvelope} /> E-mail</h2>
          <a href="mailto:Wesleykaihara@gmail.com">
            <p className={style.contato_item}>Wesleykaihara@gmail.com</p>
          </a>

          <h2 className={style.subTitle}> <FontAwesomeIcon icon={faPhone} /> Telefone</h2>
          <a href="tel:+5544997401925">
            <p className={style.contato_item}>(44) 9 9740-1925</p>
          </a>

          <h2 className={style.subTitle}> <FontAwesomeIcon icon={faLinkedin} /> Linkedin</h2>
          <a href="https://www.linkedin.com/in/wesleykaihara/" target="_blank" rel="noreferrer">
            <p className={style.contato_item}>Wesleykaihara</p>
          </a>
        </div>
        <div className={style.formContainer}>
          <form action="http://localhost/PerfilPessoalServer/newMessage.php" method="post">
            <label htmlFor="nome">Seu nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome Completo" autoComplete="off" />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="nome@email.com" autoComplete="off" />
            <label htmlFor="mensagem">Mensagem</label>
            <br />
            <textarea name="mensagem" rows="5" placeholder="Digite sua mensagem aqui"></textarea>
            <button type="submit" className={style.btn}>Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}