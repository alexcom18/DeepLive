import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/Paquetes.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
  items: 4,
  loop: true,
  margin: 300,
  autoplay: false,
  //   nav: true,
  responsive: {
    0: {
      items: 1, // Para pantallas pequeñas, muestra solo 1 elemento
      margin: 2,
      center: true,
    },
  },
  //   navText: [
  //     `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
  //     `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
  //   ],
};

function Paquetes() {
  return (
    <section className="container-fluid m-section" id="skills">
      <div className="container content-paquetes">
        <div className="carrusel-paquetes">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="images-paquetes">
              <img
                src={require("../assets/img/carrusel/unsplash_031Squ03RLk (1).png")}
              />
              <div className="numer-image one">
                <img src={require("../assets/img/icons/01.png")} />
                <h2>Cancún</h2>
              </div>
            </div>
            <div className="images-paquetes">
              <img
                src={require("../assets/img/carrusel/unsplash_0qpPV5nrhwo.png")}
              />
              <div className="numer-image two">
                <img src={require("../assets/img/icons/02.png")} />
                <h2>Cancún</h2>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="description-paquete">
          <h1 className="paquetes-title">Paquetes</h1>
          <div className="short-description">
            <h3 className="paquetes-subtitle">Cancún</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint.{" "}
            </p>
            <buttom className="button-confirm-paquete">
              <h2>Reserva ahora</h2>
            </buttom>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Paquetes;
