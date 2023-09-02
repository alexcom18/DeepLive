import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import customPrevIcon from "../assets/img/icons/flechas-arriba1.svg";
import customNextIcon from "../assets/img/icons/flechas-arriba 2.svg";

const options = {
    items: 3,
    loop: true,
    margin: 300,
    nav: true,
    responsive: {
      0: {
        items: 1, // Para pantallas pequeñas, muestra solo 1 elemento
      },
      400: {
        items: 1, // Para pantallas medianas, muestra 3 elementos
        margin: 10,
      },
      768: {
        items: 2, // Para pantallas medianas, muestra 3 elementos
        margin: 10,
      },
      1880: {
        items: 4, // Para pantallas grandes, muestra 5 elementos
        margin: 300,
      },
    },
    navText: [
      `<img src="${customPrevIcon}" alt="Custom Prev Icon" />`,
      `<img src="${customNextIcon}" alt="Custom Next Icon" />`,
    ],
  };

function ToursCarrusel(){
    return(
        <sectiopn>
            <div className="container">
            <OwlCarousel className="owl-theme" {...options}>
                <div className="card">
                    <div className="tour-img">
                        <img src={require('../assets/img/carrusel/Rectangle 14.png')} alt="imagen carrusel"/>
                    </div>

                    <div className="description">

                    </div>

                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 15.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 16.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 17.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 14.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>
            </OwlCarousel >
            </div>
            <div className="container">
            <OwlCarousel className="owl-theme" {...options}>
            <div className="card">
                    <div className="tour-img">
                        <img src={require('../assets/img/carrusel/Rectangle 14.png')} alt="imagen carrusel"/>
                    </div>

                    <div className="description">

                    </div>

                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 15.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 16.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 17.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>

                <div className="card">
                    <div className="tour-img">
                    <img src={require('../assets/img/carrusel/Rectangle 14.png')} alt="imagen carrusel"/>
                    </div>
                    <div className="description">

                    </div>
                    <div className="price">
                            
                    </div>
                </div>
            </OwlCarousel >
            </div>
        </sectiopn>

    );
}

export default ToursCarrusel