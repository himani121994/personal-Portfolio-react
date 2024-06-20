import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "./assets/img/Himani.png"
function NavbarPage() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-6">
                        <div style={{ display: "flex",margin:"10px 10px 10px -50px" }}>
                            <div>
                                <img src={img} alt="" style={{ width: "50px", height: "50px",borderRadius:"50%" }} />
                            </div>
                            
                            <h4 style={{ color: "white",margin:"10px 10px 0px 20px"}}>Himani</h4>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <Container>
                        <Nav className="me-auto" style={{ position: "sticky", zIndex: "20", right: "0px" }}>
                            <Nav.Link style={{margin:"0px 10px",fontSize:"28px"}} href="/home">Home</Nav.Link>
                            <Nav.Link style={{margin:"0px 10px",fontSize:"28px"}} href="/features">Features</Nav.Link>
                            <Nav.Link style={{margin:"0px 10px",fontSize:"28px"}} href="/resume">Resume</Nav.Link>
                            <Nav.Link style={{margin:"0px 10px",fontSize:"28px"}} href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </div>
            </div>
        </Navbar>
    );
}

export default NavbarPage;