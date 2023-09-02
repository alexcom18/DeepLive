// import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/carusel.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
  // Configura las opciones del carrusel según tus necesidades
  items: 3,
  loop: true,
  margin: 300,
  nav: true,
  responsive: {
    1880: {
      items: 3, // Para pantallas grandes, muestra 5 elementos
      margin: 300,
    },
    1570: {
      items: 3, // Para pantallas grandes, muestra 5 elementos
      margin: 300,
    },
    1200: {
      items: 3, // Para pantallas grandes, muestra 5 elementos
      margin: 130,
    },

    1090: {
      items: 3, // Para pantallas grandes, muestra 5 elementos
      margin: 70,
    },

    1024: {
      items: 3, // Para pantallas grandes, muestra 5 elementos
      margin: 3,
    },
    1016: {
        items: 3, // Para pantallas grandes, muestra 5 elementos
        margin: 3,
      },
    941: {
      items: 3, // Para pantallas medianas, muestra 3 elementos
      margin: 33,
    },
    800: {
      items: 2, // Para pantallas medianas, muestra 3 elementos
      margin: 100,
    },
    768: {
      items: 2, // Para pantallas medianas, muestra 3 elementos
      margin: 10,
    },
    400: {
        items: 1, // Para pantallas medianas, muestra 3 elementos
        margin: 10,
      },
  
    0: {
      items: 1, // Para pantallas pequeñas, muestra solo 1 elemento
    },
  },
  navText: [
    `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
    `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
  ],
};

function Carusel() {
  return (
    <section className="carusel">
      <div className="container-carusel">
        <OwlCarousel className="owl-theme" {...options}>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 4.png")} />
          </div>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 5.png")} />
          </div>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 4.png")} />
          </div>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 5.png")} />
          </div>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 4.png")} />
          </div>
          <div class="container-img">
            <img src={require("../assets/img/carrusel/Rectangle 5.png")} />
          </div>
          {/* <div class="container-img">
          <img src={require("../assets/img/banner2-bg.png")} />
        </div>
        <div class="container-img">
          <img src={require("../assets/img/banner2-bg.png")} />
        </div>
        <div class="container-img">
          <img src={require("../assets/img/banner2-bg.png")} />
        </div> */}
        </OwlCarousel>
      </div>
    </section>
  );
}
export default Carusel;
