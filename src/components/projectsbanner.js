import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../styles/projectsbanner.css"
import Recipro from "../images/recipromockup copy.png";
import Habbit from "../images/habbitmockup copy.png";
import BetterLives from "../images/betterlives.png";
const ProjectsBanner = ({ siteTitle }) => (
  <projectsbanner>
    <div className ="innerboxforbanner">
     
      
      <Row className ="projectsrow">
        <Col xs={4} md={6} >
          <div className="reciprocontainer">
            <Link href="/recipro">
              <Image className="recipro" src={Recipro}></Image>
            </Link>
          </div>
        </Col>
        <Col xs={6} md={6} >
        <Link href="/recipro" className= "notosanstext projects-title">
            RECIPRO
          </Link>
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
      <Col xs={4} md={6} >
          <div className="habbitcontainer">
            <Link href="/habbit">
              <Image className="habbit" src={Habbit}></Image>
            </Link>
          </div>
        </Col>
        <Col xs={6} md={6} >
          <Link href="/habbit" className= "notosanstext projects-title">
            HABBIT
          </Link>
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
      <Row className ="projectsrow">
        <Col xs={4} md={6} >
          <div className="betterlivescontainer">
            <Link href="/betterlives">
              <Image className="betterlives" src={BetterLives}></Image>
            </Link>
          </div>
        </Col>
        <Col xs={6} md={6} >
        <Link href="/betterlives" className= "notosanstext projects-title">
            BETTER LIVES
          </Link>
          <div className="competitionnames">
            Product Designer @ IdeasInc 2021
          </div>
          <div className= "notosanstext projectstext">
              BetterLives is a mobile app that connects homeless people with resources provided by the City of Toronto to help get them off the streets
          </div>
          <span className="notosanstext skillsdemonstrated">
            FRONT END DEVELOPMENT
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
