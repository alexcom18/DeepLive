import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/Curso.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
  items: 4,
  loop: true,
  margin: 300,
  autoplay: true,
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
  },
  navText: [
    `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
    `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
  ],
};

function Cursos() {
  return (
    <section className="m-section content-curso">
      <div className="container content-description">
        <div className="title-content">
          <h1>
            Deep Life Divers <span>cursos</span>
          </h1>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="card">
            <div className="container-image">
              <div className="circle">
                <img src={require("../assets/img/Clip-group.png")} />
              </div>
            </div>
            <div className="description">
              <h1>Curso #1</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container-image">
              <div className="circle">
              <img src={require("../assets/img/Group.png")} />
              </div>
            </div>
            <div className="description">
              <h1>Curso #2</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container-image">
              <div className="circle">
              <img src={require("../assets/img/Group-2.png")} />
              </div>
            </div>
            <div className="description">
              <h1>Curso #3</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Cursos;
