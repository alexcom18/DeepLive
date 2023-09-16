import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Carusel from "./components//Carusel";
import {ShortDescription} from "./components/Description"
import ToursCarrusel from "./components/ToursCarrusel"
import Cursos from "./components/Cursos"
import Snorkeling from './components/Snorkeling';
import Testimonio from './components/Testimonio';
import Paquetes from './components/Paquetes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carusel/>
      <Banner />
      <ShortDescription />
      <ToursCarrusel />
      <Paquetes/>
      <Cursos/>
      <Snorkeling/>
      <Testimonio/>
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;