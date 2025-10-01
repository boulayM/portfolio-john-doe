import "../App.css";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Fresh from "../assets/img/portfolio/fresh-food.jpg";
import Akira from "../assets/img/portfolio/restaurant-japonais.jpg";
import Etre from "../assets/img/portfolio/espace-bien-etre.jpg";
import Seo from "../assets/img/portfolio/seo.jpg";
import CreationApi from "../assets/img/portfolio/coder.jpg";
import Maquet from "../assets/img/portfolio/screens.jpg";
import Banner from "../assets/img/banner.jpg"
import CardsPortfolio from "../components/CardsPortfolio";

export default function Realisations () {
  return (
    <div>
      <Image src={Banner} fluid className="mt-5"/>
      <Container className="pt-5 text-center">
            <h2 className="fw-bold">Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations</p>
            <Row>
                <Col></Col>
                <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
                <Col></Col>     
            </Row>
      </Container>
      <Container className="text-center">
          <Row className="mb-3 ">

            <Col className="col-md-4">
              <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {Fresh} title="Fresh Food" alt="fruits et légumes dans une cagette"/>
                <Card.Body>
                  <Card.Title className="fw-bold">Fresh Food</Card.Title>
                  <Card.Text>
                    <small className="CardText">Site de vente de produits frais en ligne</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="col-md-4">
              <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {Akira} title="Restaurant Akira" alt="photo plat japonais"/>
                <Card.Body>
                  <Card.Title className="fw-bold">Reataurant Akira</Card.Title>
                  <Card.Text>
                    <small className="CardText">Site de vente de produits frais en ligne</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec WordPress</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="col-md-4">
              <Card className="mb-4 AppCard"> 
                <Card.Img variant="top" src= {Etre} title="Espace Bien-être" alt="photo montage avec tête de Buddah"/>
                <Card.Body>
                  <Card.Title className="fw-bold">Espace bien-être</Card.Title>
                  <Card.Text>
                    <small className="CardText">Site de vente de produits frais en ligne</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec LAVAREL</small>
                </Card.Footer>
              </Card>
            </Col>  
          </Row>

          <Row className="mb-3">

            <Col className="col-md-4">
              <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {Seo} title="SEO" alt="bannière avec textes SEO à la verticale et à l'horizontale"/>
                <Card.Body>
                  <Card.Title className="fw-bold">SEO</Card.Title>
                  <Card.Text>
                    <small className="CardText">Amélioration du référencement d'un site e-commerce</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Utilisation des outils SEO</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="col-md-4">
              <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {CreationApi} title="Création API" alt="écran d'ordinateur afficahnt du code"/>
                <Card.Body>
                  <Card.Title className="fw-bold">Création d'une API</Card.Title>
                  <Card.Text>
                    <small className="CardText">Création d'une API RESTFULL publique</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">PHP - SYMPHONY</small>
                </Card.Footer>
              </Card>
            </Col>
            
            <Col className="col-md-4">
              <Card className="mb-4 AppCard">
                <Card.Img variant="top" src= {Maquet} title="Maquette d'un site" alt="ordinateur PC portable et tablette"/>
                <Card.Body>
                  <Card.Title className="fw-bold">Maquette d'un site web</Card.Title>
                  <Card.Text>
                    <small className="CardText">Création du prototype d'un site</small>
                  </Card.Text>
                  <Button className="btn-portfolio">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Réalisé avec FIGMA</small>
                </Card.Footer>
              </Card>
            </Col>  
          </Row>
        </Container>

  </div>

  );
}

