import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="mb-4" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NEWS HUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              ALl News
            </Nav.Link>
            <Nav.Link as={Link} to="/fake-news">
              Fake News
            </Nav.Link>
            <Nav.Link as={Link} to="/real-news">
              Real News
            </Nav.Link>
            <Nav.Link as={Link} to="/create-news">
              Create News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
