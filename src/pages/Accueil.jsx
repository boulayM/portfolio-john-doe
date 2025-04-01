import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHome from "./Modal";
const Accueil = ()=>{
    return (
        <div className="hero ratio ratio-1x1">
            <div className="hero-txt fs-1 fw-bolder">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <ModalHome />
            </div>
        </div> 
    )
}
export default Accueil;