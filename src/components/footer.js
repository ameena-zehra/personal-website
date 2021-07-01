import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../styles/footer.css"
import HeartIcon from "../images/heart.png";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import Devpost from "../images/devpost copy.png";

const Footer = ({ siteTitle }) => (
  <footer>
    <Container className="outerbox footerbox" fluid>
      <div className="footercontent">
        <Row>
        <div className="changingtextpanel">
          Let's  
          <span className ="transitionspans"></span>
        </div>
        </Row>
        
        <Row>
          <Col xs={4}>
          <>
          <style type="text/css">
            {`
              .btn{
                vertical-align: center;

              }
               #buttononfooter{
                 padding: .3rem 3rem;
                 background-color: #1e1d1d;
                 color: #f5f0eb;
                 border-radius: 20px;
                 border: 1px solid #f5f0eb;
                 font-size: clamp(0.45rem, 1.4vw, 1.15rem);
                 margin-left: 40px;
                }
                      
                 #buttononfooter:hover {
                    color: #1e1d1d;
                    text-decoration: none;
                    background-color: #f5f0eb;
                  }


                      
                 `}
                </style>
                <a href= "mailto:anaqvi23@uwo.ca" target="_blank">
                   <Button variant="flat" size="xs" id ="buttononfooter">
                      anaqvi23@uwo.ca
                 </Button>
                 </a>
                </>
                </Col>

                <Col xs={4}> </Col>
              <Col xs={4}>
              <div className="textinfooter">
                Made w/  <Image className="heart" src={HeartIcon}></Image>
                  using Gatsby, React and Figma
              </div>
              </Col>
              </Row>
              <Row className ="rowoficons">
                <Col>
                <Link to= "https://github.com/ameena-zehra" target="_blank">
                <Image  className="github" src={Github}></Image> </Link>\
                <Link to= "https://www.linkedin.com/in/ameena-naqvi-638362165/" target="_blank">
                <Image  className="linkedin" src={Linkedin}></Image>  </Link> \
                <Link to= "https://devpost.com/ameena-zehra?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank">
                <Image  className="devpost" src={Devpost}></Image> </Link>\
                </Col>
                <div className ="textinfooter copyright">
                  © 2021 Ameena Naqvi all rights reserved
                </div>
              </Row>
      </div>

                    
             
      </Container>
  </footer>
)


export default Footer
