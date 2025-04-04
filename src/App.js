import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";


export default function App () {
    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
                    <Container>
                        <Navbar.Brand>John Doe</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-uppercase" variant="underline">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/services" className="nav-link">Services</Link>
                                <Link to="/realisations" className="nav-link">Portfolio</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                                <Link to="/mentionslegales" className="nav-link">Mentions Légales</Link>
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
                <Route path="realisations" element = {<Realisations/>}></Route>
                <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
            </Routes>

            <footer>
                <Container fluid>
                    <Row className = "bg-dark text-light p-4">
                        <Col className="mx-5 mb-4">
                            <h3>John Doe</h3>
                            <ul className="list-group list-unstyled">
                                <li>40 rue Laure Diebold</li>
                                <li>69009 Lyon, France</li>
                                <li>10 20 30 40 50</li>
                                <li>johndoe@gmail.com</li>
                            </ul>
                            <a href="https://github.com/github-john-doe" target="blank" className="link-light"><i class="bi bi-github fs-2 icone" rel="nofollow"></i></a>
                            <a href="https://x.com/fr" target="blank" className="link-light"><i class="bi bi-twitter-x fs-2 mx-3 icone" rel="nofollow"></i></a>
                            <a href="https://www.linkedin.com/in/johndoes/" target="blank" className="link-light"><i class="bi bi-linkedin fs-2 icone" rel="nofollow"></i></a>
                        </Col>
                        <Col className="mx-5 mb-4">
                        <h3>Liens utiles</h3>
                            <ul className="list-group list-unstyled">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/services" className="nav-link">Services</Link>
                                <Link to="/realisations" className="nav-link">Portfolio</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                                <Link to="/mentionslegales" className="nav-link">Mentions Légales</Link>
                            </ul>                        
                        </Col>
                        <Col className="mx-5 mb-4">
                        <h3>Mes dernières réalisations</h3>
                            <ul className="list-group list-unstyled">
                                <Link to="/realisations" className="nav-link">Fresh Food</Link>
                                <Link to="/realisations" className="nav-link">Restaurant Akira</Link>
                                <Link to="/realisations" className="nav-link">Espace bien-être</Link>
                                <Link to="/realisations" className="nav-link">SEO</Link>
                                <Link to="/realisations" className="nav-link">Création d'une API</Link>
                                <Link to="/realisations" className="nav-link">Maquette d'un site</Link>
                            </ul>         
                        </Col>
                    </Row>
                </Container>

            </footer>

        </div>
    );
}

