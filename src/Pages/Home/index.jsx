import style from './style.module.scss';

import Avatar from '../../Components/Avatar';
import ProjetosCard from './ProjetosCard';

import Aos from 'aos';

import CarrinhoCompras from '../../images/Portfolio/CarrinhoCompras.png';
import ClonePlaystation from '../../images/Portfolio/ClonePlaystation.png';
import Cotacao from '../../images/Portfolio/LeituraCotacao.png';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ durantion: 4000 });
  }, []);

  return (
    <section className={style.home}>
      <div className={style.homeContainer}>
        <section className={style.sobre}>
          <div className={style.sobreInfo}>
            <h1 className={style.title}>Quem sou</h1>
            <p className={style.text}>
              Meu nome Wesley Kaihara, tenho 18 anos, gosto de construir sistemas e interfaces a partir de requisições de APIs e Banco de dados utilizando as linguagens de programação Javascript e PHP. Também gosto de procurar novas funções e maneiras de realizar uma tarefa de forma mais simples e eficiente. <a href="/sobre" className={style.link}>Saiba Mais</a>
            </p>
          </div>
          <div className={style.AvatarContainer}>
            <Avatar />
          </div>

        </section>
        <section className={style.projetos}>
          <h2 className={style.subtitle} data-aos="zoom-out">Projetos</h2>
          <div className={style.projetosContainer} >
            <ProjetosCard
              link="https://github.com/WesleyKaihara/LikeSistemas_BackEnd"
              data_aos="fade-right"
              src={CarrinhoCompras}
              alt="CarrinhoCompras"
              categoria="Sistema Completo"
              title="Carrinho Compras"
              desc="Lista de produtos , CRUDs construidos com mysql e NodeJs"
            />
            <ProjetosCard
              link="https://github.com/WesleyKaihara/clone-playstation"
              data_aos="fade-up"
              src={ClonePlaystation}
              alt="Clone Playstation"
              categoria="Clone Interface"
              title="Clone Playstation"
              desc="Página de notícias e produtos Playstation , utilizando ReactJs"
            />
            <ProjetosCard
              link="https://github.com/WesleyKaihara/PHP/tree/master/LerPagina"
              data_aos="fade-left"
              src={Cotacao}
              alt="Cotação Moedas"
              categoria="WebService"
              title="Cotação Moedas"
              desc="Requisição da Cotação de moedas em tempo real , utilizando PHP"
            />
          </div>
          <a href="/portfolio" className={style.link}><p data-aos="zoom-out">Ver mais</p> </a>
        </section>
        <section className={style.conhecimentos}>
          <h2 className={style.subtitle}
            data-aos="zoom-out">Conhecimentos</h2>
          <div className={style.conhecimentosContainer}>
            <ul>
              <li
                data-aos="zoom-in">
                <h2 >React</h2>
                <p>Criação de Componentes, manipulação de estados , construção de interfaces</p>
              </li>
              <li
                data-aos="zoom-in">
                <h2>NodeJs</h2>
                <p>Manipulação de Dados(CRUDs), Criptografia de Dados (JWT), Express , Morgan</p>
              </li>
              <li
                data-aos="zoom-in">
                <h2>Mysql</h2>
                <p>Criação de tabelas, inserção e manipulação de dados, Joins , Functions</p>
              </li>
            </ul>
          </div>
        </section>
      </div >
    </section >
  );
}

export default App;
