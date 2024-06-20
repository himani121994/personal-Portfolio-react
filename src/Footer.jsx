import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./assets/css/footer.css"

function Footer() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="footer-navbar">
        <Container className="footer-container">
          <Nav className="footer-nav" style={{ justifyContent: "center", width: "100%" }}>
            <h2 style={{ color: "white", textAlign: "center", width: "100%" }}>INBIO</h2>
            <Nav.Link href="#home" style={{ color: "white", textAlign: "center", width: "100%" }}>
              © 2024. All rights reserved by Rainbow-Themes.
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
