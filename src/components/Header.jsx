import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/header.css";
import Menu from "./Menu";
import image from "../assets/wine-logo.jpg";

function Header() {
  return (
    <Navbar bg="secondary" expand="lg">
      {/* <Container> */}
        <Navbar.Brand href="/">
          <div className="logo">
            <img id="wineLogo" src={image} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="basic" href="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item className="NavMenu">
                <Menu />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="basic" href="/contact">Contact</Nav.Link>
            <Nav.Link id="basic" href="/about">About</Nav.Link>
            <Nav.Link id="basic" href="/Login">Sign Up</Nav.Link>
            <Nav.Link id="basic" href="/register"></Nav.Link>
            <Nav.Link id="basic" href="/Login"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Header;
