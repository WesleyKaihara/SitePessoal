import style from './style.module.scss';

export default function FormProjeto() {
  return (
    <section className={style.novoProjeto}>
      <h1 className={style.title}>Adicionar Projeto</h1>
      <div className={style.novoProjetoContainer}>
        <form enctype="multipart/form-data" action="http://localhost/PerfilPessoalServer/upload.php" method="POST" autoComplete='off'>
          <label htmlFor="categoria">Categoria</label>
          <input type="text" name="categoria" placeholder='Categoria (ex: Clone, api, webService)' required />
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" placeholder='Titulo do projeto' required />
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" placeholder='Descrição do Projeto(linguagem, framework, etc)' required />
          <input type="hidden" name="MAX_FILE_SIZE" value="99999999" />
          <input type="file" name="imagem" id="imagem" required />
          <button type="submit">Adicionar Projeto</button>
        </form>

      </div>
    </section>
  );
}



