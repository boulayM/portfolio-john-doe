import { Card, Button } from "react-bootstrap";
import Fresh from "../assets/img/portfolio/fresh-food.jpg";
import Akira from "../assets/img/portfolio/restaurant-japonais.jpg";
import Etre from "../assets/img/portfolio/espace-bien-etre.jpg";
import Seo from "../assets/img/portfolio/seo.jpg";
import CreationApi from "../assets/img/portfolio/coder.jpg";
import Maquet from "../assets/img/portfolio/screens.jpg";

const job = [
    
    {
        name: "Fresh Food",
        image: Fresh,
        description: "Site de vente de produits frais en ligne",
        tool: "Site réalisé avec PHP et MySQL",
        alt: "fruits et légumes dans une cagette"
    },

    {
        name: "Restaurant Akira",
        image: Akira,
        description: "Site de vente de produits frais en ligne",
        tool: "Site réalisé avec WordPress",
        alt: "photo plat japonais"
    },

    {
        name: "Espace bien-être",
        image: Etre,
        description: "Site de vente de produits frais en ligne",
        tool: "Site réalisé avec LAVAREL",
        alt: "photo montage avec tête de Buddah"
    },

    {
        name: "SEO",
        image: Seo,
        description: "Amélioration du référencement d'un site e-commerce",
        tool: "Utilisation des outils SEO",
        alt: "bannière avec textes SEO à la verticale et à l'horizontale"
    },

    {
        name: "Création d'une API",
        image: CreationApi,
        description: "Création d'une API RESTFULL publique",
        tool: "PHP - SYMPHONY",
        alt: "écran d'ordinateur afficahnt du code"
    },

    {
        name: "Maquette d'un site web",
        image: Maquet,
        description: "Maquette d'un site web",
        tool: "Réalisé avec FIGMA",
        alt: "ordinateur PC portable et tablette"
    }

];


     export default function CardsPortfolio () {

        const jobList = job.map (job =>

            <div id="cards">

            <Card className="mb-4 AppCard">
            <Card.Img variant="top" src= {job.image} title={job.name} alt={job.alt}/>
            <Card.Body>
              <Card.Title className="fw-bold">{job.name}</Card.Title>
              <Card.Text>
                <small className="CardText">{job.description}</small>
              </Card.Text>
              <Button className="btn-portfolio">Voir le site</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{job.tool}</small>
            </Card.Footer>
            </Card>
        
            </div>
        )
        return (
            <div>
                {jobList}
            </div>

            
)
    
};
