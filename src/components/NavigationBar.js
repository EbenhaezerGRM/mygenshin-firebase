import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMyGenshinImage from '../assets/logo/Logo_my_genshin.jpg'

function navigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href=".">
        <img
              alt= {logoMyGenshinImage}
              src= {logoMyGenshinImage}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{''}
        </Navbar.Brand>
        <Navbar.Brand>My Genshin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Character">Character</Nav.Link>
            <Nav.Link href="#weapon">Weapon</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#details">Detail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://ebenhaezergrm.github.io/hofgi/" target="_blank">Old Website</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/EbenhaezerGRM" target="_blank">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navigationBar;