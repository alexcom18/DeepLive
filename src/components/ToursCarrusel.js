import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/Tours.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
  items: 4,
  loop: true,
  margin: 300,
  nav: true,
  responsive: {
    0: {
      items: 1, // Para pantallas pequeñas, muestra solo 1 elemento
      margin: 2,
    },
    550: {
      items: 1, // Para pantallas medianas, muestra 3 elementos
      margin: 30,
    },
    768: {
      items: 2, // Para pantallas medianas, muestra 3 elementos
      margin: 30,
    },
    1020: {
      items: 3,
      margin: 55,
    },
    1400: {
      items: 4,
      margin: 33,
    },
  },
  navText: [
    `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
    `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
  ],
};

function ToursCarrusel() {
  return (
    <sectiopn>
      <div className="container m-section content">
        <div className="text">
          <h2>
            <span>Top</span> tours
          </h2>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 14.png")}
                alt="imagen carrusel"
              />
            </div>

            <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 15.png")}
                alt="imagen carrusel"
              />
            </div>

            <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 16.png")}
                alt="imagen carrusel"
              />
            </div>

            <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 17.png")}
                alt="imagen carrusel"
              />
            </div>

            <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 14.png")}
                alt="imagen carrusel"
              />
            </div>

            <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="container m-section content">
        <div className="text">
          <h2>
            <span>Tours</span> de temporada
          </h2>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 14.png")}
                alt="imagen carrusel"
              />
            </div>

             <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 15.png")}
                alt="imagen carrusel"
              />
            </div>

             <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 16.png")}
                alt="imagen carrusel"
              />
            </div>

             <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 17.png")}
                alt="imagen carrusel"
              />
            </div>

             <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tour-img">
              <img
                src={require("../assets/img/carrusel/Rectangle 14.png")}
                alt="imagen carrusel"
              />
            </div>

             <div className="description-content">
              <div className="descriptio">
                <h4>Scuba</h4>
                <h1>Deep in the depths of Cancun</h1>
              </div>
              <hr />
              <div className="price-content">
                <div className="prices">
                  <p>Per person | FROM</p>
                  <h3>$104 USD</h3>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </sectiopn>
  );
}

export default ToursCarrusel;
