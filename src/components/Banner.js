import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import Carusel from "./Carusel";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <span className="tagline">Bienvenido a mi proyecto de react x2</span> */}
                  {/* <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> */}
                  <div className="custom-text">
                    <span className="white-text">Explora</span><br />
                    <span className="pink-text">el mundo</span>
                  </div>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                  <button class="custom-buttom">Explorar</button>


                  {/* <button onClick={() => console.log('connect')}>Explorar <ArrowRightCircle size={25} /></button> */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="loader">
              <style>
                {`
        .loader {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        
        .circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid white;
          background-color: transparent;
        }
        
        .circle1 {
          width: 140px;
          height: 140px;
          
        }
        
        .circle2 {
          width: 220px;
          height: 220px;
          opacity: 0.6;
        }
        
        .circle3 {
          width: 300px;
          height: 300px;
          opacity: 0.3;
        }
        
        .circle1:before {
          content: "";
          position: absolute;
          top: calc(50% - 26px);
          left: calc(50% - 30px);
          width: 0;
          height: 0;
          transform: rotate(90deg);
          border-style: solid;
          border-width: 0 36px 62px 36px;
          border-color: transparent transparent white transparent;
      }
        `}
              </style>
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Carusel/> */}
    </section>
  )
}
