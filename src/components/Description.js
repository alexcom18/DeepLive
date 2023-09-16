import "../assets/css/Description.css";

export function ShortDescription() {
  return (
    <section className="container-fluid m-section" id="nosotros">
      <div className="container content">
        <div className="header">
          <div className="images">
            <img
              src={require("../assets/img/unsplash_gRr64-OCKy0.png")}
              alt="buceador"
            />
          </div>
          <h1 className="title">My Deep Life Divees </h1>
        </div>
        <div className="description-button">
          <p className="text-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <div className="button-container">
          <button>
            <img
              src={require("../assets/img/icons/flecha-correcta.png")}
              alt="flecha de boton"
            />
          </button>
          </div>
        </div>
      </div>
          <img
            className="decoration"
            src={require("../assets/img/icons/Group 26.png")}
            alt="Decoracion"
          />
    </section>
  );
}
