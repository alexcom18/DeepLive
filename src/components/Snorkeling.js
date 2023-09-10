import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/Snorkeling.css";

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
        center:true
        // margin: 2,
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
  
function Snorkeling() {
  return (
    <secttion className="m-section content">
      <div className="container ">
        <div className="text-desciption">
          <h1>Snorkeling</h1>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="card-snorkel">
            <div className="description-content">
                <div className="descriptio">
                    <h1>Snorkel</h1>
                    <h4 className="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h4>
                </div>
                <hr className="line"/>
                <div className="price-content">
                    <div className="price">
                        <p>Por persona | DESDE</p>
                        <h3>$104 MXN</h3>
                    </div>
                </div>
            </div>
            <div className="background-card">
            <img src={require('../assets/img/carrusel/Rectangle_3.png')}  alt=""/>
            </div>
          </div>
          <div className="card-snorkel">
            <div className="description-content">
                <div className="descriptio">
                    <h1>Snorkel</h1>
                    <h4 className="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h4>
                </div>
                <hr className="line"/>
                <div className="price-content">
                    <div className="price">
                        <p>Por persona | DESDE</p>
                        <h3>$104 MXN</h3>
                    </div>
                </div>
            </div>
            <div className="background-card">
            <img src={require('../assets/img/carrusel/Rectangle_1.png')}  alt=""/>
            </div>
          </div>
          <div className="card-snorkel">
            <div className="description-content">
                <div className="descriptio">
                    <h1>Snorkel</h1>
                    <h4 className="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h4>
                </div>
                <hr className="line"/>
                <div className="price-content">
                    <div className="price">
                        <p>Por persona | DESDE</p>
                        <h3>$104 MXN</h3>
                    </div>
                </div>
            </div>
            <div className="background-card">
            <img src={require('../assets/img/carrusel/Rectangle_2.png')}  alt=""/>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </secttion>
  );
}


export default Snorkeling