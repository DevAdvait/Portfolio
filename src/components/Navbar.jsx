import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function PageNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container className="nav-container">
        <Navbar.Brand href="#home" className="nav-item brand">
          Advait Tumbre
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ background: "#20A39E" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home" className="nav-item items">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item items">
              About
            </Nav.Link>
            <Nav.Link href="#Blog" className="nav-item items">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
