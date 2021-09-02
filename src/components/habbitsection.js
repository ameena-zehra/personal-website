import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import "../styles/projectpages.css"
import Habbit from "../images/habbittopbanner.png";
import HabbitSolutionGraphic from "../images/habbitsolutionpicture.png";
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
      <span className="pinkbackdrop">
        <Image className="projectbanner" src={Habbit}></Image>
      </span>
    </Row>
    <div className="innerboxforbanner">
      <Row className="notosanstext education">
      SheHacks Hackathon | App Design
        </Row>
      <Row className="notosanstext header-text brown">
      HABBIT
        </Row>
    </div>
    <Row className="rowinbanner notosanstext">
      <Col className="projectblurb brown" md={6} xs={8}>
        <div>
          Habbit is a mobile application developed within a 36 hour hackathon with the main goal of empowering young women through tech.
          
           <br></br>
          <br></br>
          Originally inspired by the Hobbit, this app was meant to bridge the financial literacy gap that exists for young girls through a mystical and adventurous platform that is both educational and fully interactive!
                     
      
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

            <Button href="https://www.figma.com/proto/Fr6MUviKwpaKotGCESNvIs/shehacks?node-id=12%3A46&scaling=scale-down&page-id=0%3A1&starting-point-node-id=12%3A46" target="_blank" variant="flat" size="xs">
            Go To Prototype
                    </Button>
          </>
        </div>
      </Col>
      <Col md={5} xs={3}>
        <div className="projectinfo brown">
          <b>Date:</b> January 2021
                    <br></br>
          <br></br>
          <b>Tools:</b> React Native & Figma
                    <br></br>
          <br></br>
          <b>Team: </b> Ameena Naqvi, Tara Rao Pandit, Irene Ni & Abby Di Laudo
                </div>
                   
      </Col>
    </Row>
    <Row>
      <Col className="projectblurb brown" md={4} xs={3}>
        <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1750" id="quote">
          <br></br>
          <br></br>
          <i>
          “Give a woman a dollar, and she can put it to good use. Teach her about how money really works, and she can change the world.”
                    </i>
          <br></br>
                    
                    —Linda Taylor, CEO of Investment Counsellors
                </div>
      </Col>
      <Col md={6} xs={8}>
        <div className="notosanstext subtitles brown">
        Problem Statement
         
         
                </div>
        <div className="notosanstext projectblurb brown">
          <br></br>
                  The main problem addressed through Habbit is the persistent lack of education on financial literacy within the Ontario schooling system.
          <br></br>
          This leaves many young girls stranded, without the foundation to build long-term independence and economic security.
          
                    
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </Col>
    </Row>
    <div className="notosanstext subtitlescenter brown center">
    Our Solution
            <br></br>
      <br></br>
    </div>
    <Row className="rowinbanner">
           
      <Col className="notosanstext projectblurb brown" md={5} xs={7}>
        <div>
         
                    Habbit acts as both an educational app and a personalized income tracker that teaches young girls about saving and spending.
                    <br></br>
          <br></br>
                    Users stay involved through tracking their daily expenses and earnings while also learning about money basics, budgeting and trivia.
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

            <Button href="https://devpost.com/software/habbit-vdhj48" target="_blank" variant="flat" size="xs">
            Go To Final Product
                    </Button>
          </>
        </div>
      </Col>
      <Col md={6} xs={4}>
        <Image id="solutiongraphic" src={HabbitSolutionGraphic}></Image>
                   
      </Col>
            
    </Row>
    <div data-aos="fade-up"
       data-aos-duration="1250" className="rowinbanner innerboxforbanner lightbrown center">
    Using their newfound financial awareness, young girls are empowered to thoughtfully exercise their <i>financial independence </i>and make <i>wiser </i> and <i>better-informed</i> spending choices.
             
    </div>
    <div className="notosanstext subtitlescenter brown center">
    Product Demo
            <br></br>
      <br></br>
    </div>
    <iframe id="iframe" width="460" height="215" src="https://www.youtube.com/embed/mNapPytyNfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
        
    </div>

);
 
  
     

 };


export default Banner
