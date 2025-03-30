import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";


export default function App () {
    return (

        <div className="App">
                <nav className="App-nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Me contacter</Link>
                    <Link to="/realisations">Realisations</Link>
                    <Link to="/mentionslegales">Mentions Légales</Link>
                </nav>
            <Routes>
                <Route path="/" element = {<Accueil/>}></Route>
                <Route path="services" element = {<Services/>}></Route>
                <Route path="contact" element = {<Contact/>}></Route>
                <Route path="realisations" element = {<Realisations/>}></Route>
                <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
            </Routes>
        </div>
    )
}

