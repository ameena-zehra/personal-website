import * as React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../styles/navigation.css"
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>
const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand ="sm">
        <Navbar.Brand href="/"> <div className ="notosanstext nav-text logo"> Ameena Zehra</div></Navbar.Brand>
        <Navbar.Toggle aria-controls ="navbarResponsive"/>
        <Navbar.Collapse id = "navbarResponsive">
          <Nav as ="ul" className = "ml-auto">
            <Nav.Item as ="li">
              <Link to="/aboutme" className = "notosanstext nav-text" activeClassName ="active"> about</Link>
            </Nav.Item>
            <Nav.Item as ="li">
              <Link to="/myprojects" className = "notosanstext nav-text" activeClassName ="active"> my projects </Link>
            </Nav.Item>
            <Nav.Item as ="li">
              <Link to="https://drive.google.com/file/d/1pHjD85ywJhqyShUTXPedPzta5xvnI9cw/view?usp=sharing" className = "notosanstext nav-text" activeClassName ="active"> resume</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
)


export default Header
