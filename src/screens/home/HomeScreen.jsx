import React from 'react';
import './Home.css';
import burguerMain from '../../../public/img/burguerMain.jpg';
import drinksMain from '../../../public/img/drinksMain.jpg';
import rabasMain from '../../../public/img/rabasMain.jpg';
import cervezaMain from '../../../public/img/cervezaMain.jpg';
import pizzaMain from '../../../public/img/pizzaMain.jpg';
import postreMain from '../../../public/img/postreMain.avif';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const goToProducts = () => navigate('/products');

  return (
    <>
      <title>Cerveceria</title>
      <body className='body'>
        <main className='main'>
          <section className="contenedor__Grid">
            <div className="card boxCerveza" onClick={goToProducts}>
              <img className="imgCervezaMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/cervezaMain-z9Q-I_H4.jpg' alt="Cerveza" />
              <h3>Cerveza</h3>
            </div>
            <div className="card boxPicada" onClick={goToProducts}>
              <img className="imgPicadaMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/rabasMain-Y0VaT9g3.jpg' alt="Para Picar" />
              <h3>Para Picar</h3>
            </div>
            <div className="card boxPizza" onClick={goToProducts}>
              <img className="imgPizzaMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/pizzaMain-A00PpHoF.jpg' alt="Pizzas" />
              <h3>Pizzas</h3>
            </div>
            <div className="card boxBurguer" onClick={goToProducts}>
              <img className="imgBurguerMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/burguerMain-DwY4RtMG.jpg' alt="Burguers" />
              <h3>Burguers</h3>
            </div>
            <div className="card boxDrinks" onClick={goToProducts}>
              <img className="imgDrinksMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/drinksMain-LivcLVFR.jpg' alt="Drinks" />
              <h3>Drinks</h3>
            </div>
            <div className="card boxPostres" onClick={goToProducts}>
              <img className="imgPostreMain" src='https://raw.githubusercontent.com/AlvarezEzequiel/proyecto-react-vite/gh-pages/assets/postreMain-toUcxzq1.avif' alt="Postres" />
              <h3 className="titulos-main">Postres</h3>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default HomeScreen;
