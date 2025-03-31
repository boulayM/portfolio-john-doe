import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";
import Footer from "./Footer";


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

            <Footer fixed="bottom"/>

        </div>
    )
}

