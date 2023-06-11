import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar.css"; // Create a CSS file for custom styles
import logoImage from "../assets/Logo-removebg-preview.png";
const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="glass-navbar">
      <Container>
        <Navbar.Brand href="/" className="neon-text">
          <img
            src={logoImage}
            alt="Advait Logo"
            className="logo-image img-fluid"
            width="50"
            height="50"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="neon-text">
              Home
            </Nav.Link>
            <Nav.Link href="/blogs" className="neon-text">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
