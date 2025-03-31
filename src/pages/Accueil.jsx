import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Accueil = ()=>{
    return (
        <div className="App-body">
        <h1>Ma page APP</h1>
        <h2>Accueil</h2>
        <button type="button" className="btn btn-primary">Primary</button>
        <div>
        <i className="bi bi-alarm" style={{ fontSize: '2rem', color: 'red' }}></i>
        </div>
        </div> 

    )
}
export default Accueil;