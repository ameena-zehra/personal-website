import * as React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../styles/navigation.css"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand ="sm">
        <Navbar.Brand href="/"> <div className ="notosanstext nav-text logo"> Ameena Zehra</div></Navbar.Brand>
        <Navbar.Toggle aria-controls ="navbarResponsive"/>
        <Navbar.Collapse id = "navbarResponsive">
          <Nav as ="ul" className = "ml-auto">
            <Nav.Item as ="li">
              <Link to="/about" className = "notosanstext nav-text" activeClassName ="active"> about</Link>
            </Nav.Item>
            <Nav.Item as ="li">
              <Link to="/projects" className = "notosanstext nav-text" activeClassName ="active"> work </Link>
            </Nav.Item>
            <Nav.Item as ="li">
              <Link to="/resume" className = "notosanstext nav-text" activeClassName ="active"> resume</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
)


export default Header
