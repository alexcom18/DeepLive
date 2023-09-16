import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/Testimonio.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
  items: 4,
  loop: true,
  margin: 300,
//   autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1, // Para pantallas pequeñas, muestra solo 1 elemento
      //   margin: 2,
      center: true,
    },
    768: {
      items: 2, // Para pantallas medianas, muestra 3 elementos
      margin: 30,
    },
    1020: {
      items: 3,
      margin: 55,
    },
  },
  navText: [
    `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
    `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
  ],
};

function Testimonio() {
  return (
    <section className="m-section content" id="testimonios">
      <div className="container colum-content">
        <div className="text-description">
          <h1>Testimonios</h1>
        </div>
        <div className="carrusel">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item testimonios">
              <div className="description-image">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                <div className="image-start">
                  <img className="people" src={require("../assets/img/carrusel/Photo.png")} alt="Imagen 1" />
                  <div className="start-name">
                    <p><strong> George Danny</strong></p>
                    <img className="start" src={require("../assets/img/carrusel/Group 174.png")} alt="Imagen 1"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="item testimonios">
              <div className="description-image">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                <div className="image-start">
                  <img className="people" src={require("../assets/img/carrusel/image 1.png")} alt="Imagen 1" />
                  <div className="start-name">
                    <p><strong> Sarah Whiteman</strong></p>
                    <img className="start" src={require("../assets/img/carrusel/Group 174.png")} alt="Imagen 1"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="item testimonios">
              <div className="description-image">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                <div className="image-start">
                  <img className="people" src={require("../assets/img/carrusel/Photo (1).png")} alt="Imagen 1" />
                  <div className="start-name">
                    <p><strong> Georgina Danny</strong></p>
                    <img className="start" src={require("../assets/img/carrusel/Group 174.png")} alt="Imagen 1"  />
                  </div>
                </div>
              </div>
            </div>
            {/* Agrega más elementos según sea necesario */}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonio;
