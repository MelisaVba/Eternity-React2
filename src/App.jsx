//import './../public/css/style.css';
import './App.css';
//import './styles/style.css';
//import './styles/normalize.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Home.css';
import './styles/Gallery.css';
//import './styles/Contact.css';


import Carousel from "./components/Carousel";
import Card from "./components/Card"; 
import Partners from "./components/Partners";

import { slides, icons } from './data';
import { cards } from "./data/CardsItems";


function App() {
  return (
    <>
    <Carousel slides={slides} />

      <section id="nosotros">
        <h1>Eternity</h1>
        <p>
          En Eternity, transformamos la automatización para tu hogar, tu trabajo y más allá. 
          Fabricamos robots con inteligencia artificial de última generación, diseñados para 
          simplificar tareas diarias, optimizar procesos laborales y llevar a cabo investigaciones 
          avanzadas en salud. Nuestra tecnología no solo mejora tu vida cotidiana, sino que 
          también abre puertas a exploraciones planetarias, enviando robots para misiones 
          espaciales pioneras. Descubre cómo nuestros innovadores productos pueden revolucionar 
          tu mundo y explorar nuevos horizontes.
        </p>
      </section>

      <Card cards={cards} />
    
      <Partners title="Socios de Eternity" partners={icons} />
    </>
      
  );
}

export default App;



