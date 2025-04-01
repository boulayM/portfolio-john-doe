import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container } from "react-bootstrap";

const Accueil = ()=>{
    return (
        <div className="hero ratio ratio-1x1">
            <div className="hero-txt fs-1 fw-bolder">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
            </div>
        </div> 
    )
}
export default Accueil;