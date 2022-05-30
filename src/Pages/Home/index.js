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
          <div>
            <h1 className={style.title}>Quem sou</h1>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima vero illum quisquam amet. Amet excepturi culpa voluptas ducimus corporis aut? Molestias hic, sit doloremque ipsam et ullam? Amet, dignissimos.</p>
          </div>
          <Avatar />
        </section>
        <section className={style.projetos}>
          <h2 className={style.subtitle}>Projetos</h2>
          <div className={style.projetosContainer} >
            <ProjetosCard
              data_aos="fade-right"
              src={CarrinhoCompras}
              alt="CarrinhoCompras"
              categoria="Sistema Completo"
              title="Carrinho Compras"
              desc="Lista de produtos , CRUDs construidos com mysql e NodeJs"
            />
            <ProjetosCard
              data_aos="fade-up"
              src={ClonePlaystation}
              alt="Clone Playstation"
              categoria="Clone Interface"
              title="Clone Playstation"
              desc="Página de notícias e produtos Playstation , utilizando ReactJs"
            />
            <ProjetosCard
              data_aos="fade-left"
              src={Cotacao}
              alt="Cotação Moedas"
              categoria="WebService"
              title="Cotação Moedas"
              desc="Requisição da Cotação de moedas em tempo real , utilizando PHP"
            />
          </div>
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
