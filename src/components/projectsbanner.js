import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../styles/projectsbanner.css"
import Recipro from "../images/recipromockup copy.png";
import Habbit from "../images/habbitmockup copy.png";
import Arrow from "../images/arrow.png";
const ProjectsBanner = ({ siteTitle }) => (
  <projectsbanner>
    <div className ="innerboxforbanner">
     <Row className="rowwitharrow">
        <Image className="arrow" src={Arrow}></Image>
      </Row>
      <div className ="notosanstext header-text main-title"> My Projects</div>
      <Row className ="projectsrow">
        <Col xs={6} >
          <div className= "reciprocontainer">
            <Image className="recipro" src={Recipro}></Image>
          </div>
        </Col>
        <Col xs={6} >
        <div className= "notosanstext projects-title">
            RECIPRO
          </div>
          <div className="competitionnames">
            TU20 2021 Competition
          </div>
          <div className= "notosanstext projectstext">
              Recipro is a  mobile platform that allows neighbours to practice and receive random acts of kindness, promoting social capital in their communities.
          </div>
          <span className="notosanstext skillsdemonstrated">
            BUSINESS DEVELOPMENT
          </span>
          <span className="notosanstext skillsdemonstrated">
            PRODUCT DESIGN
          </span>
        </Col>
      </Row>
      <Row className ="projectsrow">
      <Col xs={6} >
      <div className= "habbitcontainer">
            <Image className="habbit" src={Habbit}></Image>
          </div>
        </Col>
        <Col xs={6} >
          <div className= "notosanstext projects-title">
            HABBIT
          </div>
          <div className="competitionnames">
            SheHacks 2021 Competition
          </div>
          <div className= "notosanstext projectstext">
              Habbit serves as both an educational mobile app and a personalized income tracker that teaches young girls about saving and spending.
          </div>
          <span className="notosanstext skillsdemonstrated">
            FRONT-END DEVELOPMENT
          </span>
          <span className="notosanstext skillsdemonstrated">
            UI/UX DESIGN
          </span>
        </Col>
      </Row>
     
     

    </div>
  </projectsbanner>
)


export default ProjectsBanner
