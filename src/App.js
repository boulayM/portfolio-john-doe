import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Portfolio";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";


function topFunction() {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


document.body.addEventListener("click", function(){
    let navBar = document.getElementById("responsive-navbar-nav");
    navBar.classList.remove("show");
});


export default function App () {


    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
                    <Container>
                        <Navbar.Brand>John Doe</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-uppercase" variant="underline">
                                <Nav.Link as={Link} to="/" eventKey="1" onClick={topFunction}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/services" eventKey="2" onClick={topFunction}>Services</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio" className="nav-link" eventKey="3" onClick={topFunction}>Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/contact" eventKey="4" onClick={topFunction}>Contact</Nav.Link>
                                <Nav.Link as={Link} to="/mentionslegales" eventKey="5" onClick={topFunction}>Mentions Légales</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
            
            </main>

            <Routes>
                <Route path="/" element = {<Accueil/>}></Route>
                <Route path="services" element = {<Services/>}></Route>
                <Route path="contact" element = {<Contact/>}></Route>
                <Route path="portfolio" element = {<Realisations/>}></Route>
                <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
            </Routes>

            <footer>
                <Container fluid>
                    <Row className = "bg-dark text-light p-4">
                        <Col className="mx-5 mb-4 colFooter">
                            <h3>John Doe</h3>
                            <ul className="list-group list-unstyled">
                                <li>40 rue Laure Diebold</li>
                                <li>69009 Lyon, France</li>
                                <li>10 20 30 40 50</li>
                                <li>johndoe@gmail.com</li>
                            </ul>
                            <a href="https://github.com/github-john-doe" target="blank" className="link-light"><i className="bi bi-github fs-2 icone" rel="nofollow"></i></a>
                            <a href="https://x.com/fr" target="blank" className="link-light"><i className="bi bi-twitter-x fs-2 mx-3 icone" rel="nofollow"></i></a>
                            <a href="https://www.linkedin.com/in/johndoes/" target="blank" className="link-light"><i className="bi bi-linkedin fs-2 icone" rel="nofollow"></i></a>
                        </Col>
                        <Col className="mx-5 mb-4 colFooter">
                        <h3>Liens utiles</h3>
                            <ul className="list-group list-unstyled">
                                <Link to="/" className="nav-link linkFooter" onClick={topFunction}>Home</Link>
                                <Link to="/services" className="nav-link linkFooter" onClick={topFunction}>Services</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" rel="noindex" onClick={topFunction}> Portfolio</Link>
                                <Link to="/contact" className="nav-link linkFooter" onClick={topFunction}>Contact</Link>
                                <Link to="/mentionslegales" className="nav-link linkFooter" onClick={topFunction}>Mentions Légales</Link>
                            </ul>                        
                        </Col>
                        <Col className="mx-5 mb-4 colFooter">
                        <h3>Mes dernières réalisations</h3>
                            <ul className="list-group list-unstyled">
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>Fresh Food</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>Restaurant Akira</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>Espace bien-être</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>SEO</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>Création d'une API</Link>
                                <Link to="/portfolio" className="nav-link linkFooter" onClick={topFunction}>Maquette d'un site</Link>
                            </ul>         
                        </Col>
                    </Row>
                </Container>

            </footer>
            
        </div>
    );
}

