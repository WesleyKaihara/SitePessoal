import style from './style.module.scss';
import Card from '../../Components/Card';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
  const [projetos, setProjetos] = useState();

  useEffect(() => {
    Aos.init({ durantion: 2000 });
    axios.get("http://172.22.214.75/PerfilPessoalServer/verProjetos.php")
      .then(res => {
        setProjetos(res.data);
      });

  }, []);

  return (
    <section className={style.portfolio}>
      <h1 className={style.title} data-aos="flip-down">Portfólio</h1>
      <div className={style.portfolioContainer}>
        {
          ((typeof projetos === 'undefined') ? (
            <p>Loading ... </p>
          ) : (
            projetos.map((projeto) => {
              return (
                <Card
                  link={projeto.LINK}
                  key={projeto.ID}
                  src={`http://172.22.214.75/PerfilPessoalServer/getImagem.php?id=${projeto.ID}`}
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



