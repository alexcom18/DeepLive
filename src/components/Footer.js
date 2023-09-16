import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-fotter.png";
import "../assets/css/Footer.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="content">
          <div className="logo-container">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="description-footer">
            <div className="column">
              <div className="title">
                <h4>Company</h4>
              </div>
              <div className="direction">
              <ul>
                <li>
                  <a href="#nosotros">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="column">
              <div className="title">
                <h4>Company</h4>
              </div>
              <div className="direction">
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Galery</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="column">
              <div className="title">
                <h4>Company</h4>
              </div>
              <div className="direction">
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};
