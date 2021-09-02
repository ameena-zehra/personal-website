import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import "../styles/projectpages.css"
import Recipro from "../images/reciprotopbanner.png";
import ReciproSolutionGraphic from "../images/reciprosolutionpicture.png";
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
      <span className="orangebackdrop">
        <Image className="projectbanner" src={Recipro}></Image>
      </span>
    </Row>
    <div className="innerboxforbanner">
      <Row className="notosanstext education">
      TU20 Competition | App Design
        </Row>
      <Row className="notosanstext header-text brown">
      RECIPRO
        </Row>
    </div>
    <Row className="rowinbanner notosanstext">
      <Col className="projectblurb brown" md={6} xs={8}>
        <div>
        Recipro is a mobile app that allows users to submit requests for aid to a community of neighbours within a 15km radius.
                    <br></br>
          <br></br>
                     
                    This enables neighbours to practice and receive random acts of kindness, fostering a sense of belonging and connectivity in the community.
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

            <Button href="https://www.figma.com/proto/elP9AlZGyMpHqBUEcwX21k/RECIPRO?node-id=205%3A5&scaling=scale-down&page-id=1%3A3&starting-point-node-id=205%3A5&show-proto-sidebar=1" target="_blank" variant="flat" size="xs">
            Go To Prototype
                    </Button>
          </>
        </div>
      </Col>
      <Col md={5} xs={3}>
        <div className="projectinfo brown">
          <b>Date:</b> March 2021
                    <br></br>
          <br></br>
          <b>Tools:</b> Figma, Firebase, Android Studio
                    <br></br>
          <br></br>
          <b>Team: </b> Ameena Naqvi, Briana Tang, Jessica Yang, Irene Ni, Isabella Li, Yuna Choi
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
          “I feel like I struggle to get to know people living around me. I’d love to have a couple of neighbours I trust and can support me.”
                    </i>
          <br></br>
                    
                    — Claira Randolf,  45 (User Testing)
                </div>
      </Col>
      <Col md={6} xs={8}>
        <div className="notosanstext subtitles brown">
        Problem Statement
         
         
                </div>
        <div className="notosanstext projectblurb brown">
          <br></br>
                    The main problem addressed through Recipro is low social capital, a ubiquitous feature of Canadian communities where only 4 in 10 people reportedly know their neighbours.
                 
                    
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
          
                    Recipro serves as a platform for users to advertise tasks that they require help for.
                    <br></br>
          <br></br>
                    To incentivize reciprocity and sustained relationships, the app is built on a gamified system where points are exchanged between the users and recipients of each task.
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

            <Button href="https://docs.google.com/document/d/1vUxbAQOq2gquP9OUVWuD9puX9KtC2NiJv5v23246Zt0/edit?usp=sharing" target="_blank" variant="flat" size="xs">
            Go To Business Plan
                    </Button>
          </>
        </div>
      </Col>
      <Col md={6} xs={4}>
        <Image className="solutiongraphic" src={ReciproSolutionGraphic}></Image>
                   
      </Col>
            
    </Row>
    <div data-aos="fade-up"
       data-aos-duration="1250" className="rowinbanner innerboxforbanner lightbrown center">
    Our solution is to create a <i>long-lasting</i> community technological infrastructure sustained by <i>communal need, goodwill,</i> and <i>point-based incentivization. </i>
             
    </div>
    <div className="notosanstext subtitlescenter brown center">
    Product Demo
            <br></br>
      <br></br>
    </div>
    <iframe id="iframe" width="360" height="215" src="https://www.youtube.com/embed/CRo4CElS6wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
        
    </div>

);
 
  
     

 };


export default Banner
