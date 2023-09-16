import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/LogoDeepBlanco.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import '../assets/css/styles.css'
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="logo-deep">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Tours</Nav.Link>
              <Nav.Link href="#tours" className={activeLink === 'tours' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tours')}>Tours por temporada</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Paquetes</Nav.Link>
              <Nav.Link href="#cursos" className={activeLink === 'cursos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cursos')}>Cursos</Nav.Link>
              <Nav.Link href="#snorkeling" className={activeLink === 'snorkeling' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('snorkeling')}>Snorkeling</Nav.Link>
              <Nav.Link href="#testimonios" className={activeLink === 'testimonios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonios')}>Blog</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> */}
              <HashLink to='#connect'>
                <button className="vvd"><span>Reservar ahora</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}