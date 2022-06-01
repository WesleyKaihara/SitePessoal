import style from './style.module.scss';
// 172.22.214.75
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function FormProjeto() {
  return (
    <section className={style.novoProjeto}>
      <h1 className={style.title}>Adicionar Projeto</h1>
      <div className={style.novoProjetoContainer}>
        <form encType="multipart/form-data" action="http://localhost/PerfilPessoalServer/upload.php" method="POST" autoComplete='off'>
          <label htmlFor="categoria">Categoria</label>
          <input type="text" name="categoria" placeholder='Categoria (ex: Clone, api, webService)' required />

          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" placeholder='Titulo do projeto' required />

          <label htmlFor="link">Link do Projeto</label>
          <input type="url" name="link" placeholder='Link do projeto/Repositório' required />

          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" placeholder='Descrição do Projeto(linguagem, framework, etc)' required />

          <input type="hidden" name="MAX_FILE_SIZE" value="99999999" />
          <div className={style.containerFile}>
            <FontAwesomeIcon icon={faUpload} className={style.icon} />
            <div className={style.FileBtnDesign}>...</div>
            <input type="file" name="imagem" id={style.imagem} required />
          </div>

          <br />
          <button type="submit" className={style.btn}>Adicionar Projeto</button>

        </form>

      </div>
    </section>
  );
}



