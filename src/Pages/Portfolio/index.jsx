import style from './style.module.scss';
import Card from '../../Components/Card';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [projetos, setProjetos] = useState();
  const [busca, setBusca] = useState('');
  const [proejetosFiltrados, setProjetosFiltrados] = useState(projetos);

  const ip = "172.22.214.75";
  useEffect(() => {
    Aos.init({ durantion: 2000 });
    axios.get(`http://${ip}/PerfilPessoalServer/verProjetos.php`)
      .then(res => {
        setProjetos(res.data);
        setProjetosFiltrados(res.data)
      });

  }, []);

  function pesquisaProjetos(pesquisa) {
    setBusca(pesquisa);

    const buscaLowerCase = pesquisa.toLowerCase();
    const item = (projetos.filter(projeto =>
      projeto.TITULO.toLowerCase().includes(buscaLowerCase)
    ));

    setProjetosFiltrados(item);

    if (pesquisa === '') {
      setProjetosFiltrados(projetos);
    }
  };

  return (
    <section className={style.portfolio}>
      <header className={style.header}>
        <div></div>
        <h1 className={style.title} data-aos="flip-down">Portfólio</h1>
        <input type="text" placeholder="buscar projeto"
          className={style.buscaProjeto}
          value={busca}
          onChange={(e) => pesquisaProjetos(e.target.value)}
        />
      </header>


      <div className={style.portfolioContainer}>
        {
          ((typeof proejetosFiltrados === 'undefined') ? (
            <p>Loading ... </p>
          ) : (
            proejetosFiltrados.map((projeto) => {
              return (
                <Card
                  link={projeto.LINK}
                  key={projeto.ID}
                  src={`http://${ip}/PerfilPessoalServer/getImagem.php?id=${projeto.ID}`}
                  alt={projeto.TITULO}
                  categoria={projeto.CATEGORIA}
                  title={projeto.TITULO}
                  desc={projeto.DESCRICAO}
                />
              )
            })
          )
          )
        }
        <a href="/novoProjeto">
          <div className={style.newItem} data-aos="zoom-in">
            <h2>Adicionar Projeto</h2>
          </div>
        </a>

      </div>
    </section>
  );
}



