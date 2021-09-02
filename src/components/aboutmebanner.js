import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import "../styles/aboutmebanner.css"
import PictureofMe from "../images/professionalpic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
  
    <Container fluid className="outerbox">
      <div className="innerbox">
        <Row className="rowwithimage">
          <Col xs={8} md={6} lg={6} >
            <Image className="pictureofme" src={PictureofMe}></Image>

          </Col>
          <Col xs={12} md={6} lg={6} className="columnwithtext">
            <div id="notosanstext" className="notosanstext hi-there">Hi! I'm Ameena <span className="wave">👋🏼 </span></div>
            <div id="notosanstext" className="notosanstext education">Computer Science & Business Student @ <span className="purple">Western University </span> </div>
            <br></br>
            <div id="notosanstext" className="notosanstext blurb"> I have always been fascinated by the blend of tech and business embedded in the digital products I use in my everyday life. This led to my passion for programming, UI/UX Design and entrepreneurship!
              <br></br>
              <br></br>
              In the future, I hope to write beautiful code and build innovative products for others to use and love!
              <br></br>
              <br></br>
              Languages:
              
              </div>
            <div id="languages">
              <span className="notosanstext languages">
                JAVA
          </span>
              <span className="notosanstext languages">
                PYTHON
          </span>
              <span className="notosanstext languages">
                JAVASCRIPT
          </span>
              <span className="notosanstext languages">
                HTML & CSS
          </span>
            </div>
            <br></br>
            <div id="notosanstext" className="notosanstext blurb">
              When I’m not crunching code you can find me;  <br></br>
              <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1750" id="hobbies">
                🎧   Singing along to Hamilton, Mamma Mia & other Broadway hits <br></br>
              🧁   Stress-baking cookies, banana bread & other goodies <br></br>
              🔍   Predicting this week’s winners of the Bachelor
              </div>
            </div>
          
          </Col>
        </Row>
      </div>
    </Container>

  );
};


export default Banner
