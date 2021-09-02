import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import "../styles/projectpages.css"
import BetterLives from "../images/betterlivestopbanner.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Banner = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

return (
    <div>
    <Row >
      <span className="greenbackdrop">
        <Image className="projectbanner" src={BetterLives}></Image>
      </span>
    </Row>
    <div className="innerboxforbanner">
      <Row className="notosanstext education">
      IdeasInc Internship 2021 | App Design
        </Row>
      <Row className="notosanstext header-text brown">
      BETTER LIVES
        </Row>
    </div>
    <Row className="rowinbanner notosanstext">
      <Col className="projectblurb brown" md={6} xs={8}>
        <div>
          Better Lives is an ongoing project developed as part of IdeasInc, an international accelerator based of Sheffield, UK and Toronto, Canada. 
           <br></br>
          <br></br>
          In collaboration with City of Toronto outreach workers and community providers an app prototype was designed to help homeless people navigate through the cities rehabilitation services.
                  
      
                    <br></br>
          <br></br>
          <>
            <style type="text/css">
              {`
                      .btn{
                        padding: .15rem 1rem;
                        font-family: "Noto Sans", sans-serif;
                        
                      }
                      .btn-flat {
                        background-color: white;
                        color: black;
                        border-radius: 5px;
                        border: 1px solid black;
                      }

                      .btn-xs {
                        font-size: clamp(0.35rem, 1vw, 1.25rem);
                      }
                      
                      .btn:hover {
                        color: white;
                        text-decoration: none;
                        background-color: black;
                    }

                      
                      `}
            </style>

            <Button href="http://www.ideasincuk.co.uk" target="_blank" variant="flat" size="xs">
            More about IdeasInc
                    </Button>
          </>
        </div>
      </Col>
      <Col md={5} xs={3}>
        <div className="projectinfo brown">
          <b>Date:</b> April 2021
                    <br></br>
          <br></br>
          <b>Tools:</b> Android Studio & Figma
                    <br></br>
          <br></br>
          <b>Team: </b> Ameena Naqvi, Tara Rao Pandit, Irene Ni & Abby Di Laudo
                </div>
                   
      </Col>
    </Row>
    
    
        
    </div>

);
 
  
     

 };


export default Banner
