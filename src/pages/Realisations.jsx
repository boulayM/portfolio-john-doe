import "../App.css";
import { Container, Row, Col, Card, Button, Image} from "react-bootstrap";
import Fresh from "../assets/img/portfolio/fresh-food.jpg";
import Akira from "../assets/img/portfolio/restaurant-japonais.jpg";
import Etre from "../assets/img/portfolio/espace-bien-etre.jpg";
import Seo from "../assets/img/portfolio/seo.jpg";
import CreationApi from "../assets/img/portfolio/coder.jpg";
import Maquet from "../assets/img/portfolio/screens.jpg";
import Banner from "../assets/img/banner.jpg"

export default function Realisations () {
  return (
    <div>
      <Image src={Banner} className="ratio ratio-21x9" />
        <Container className="text-center">
          <Row>
            <Col>
              <h1 className="fw-bold mt-5">Portfolio</h1>
              <p>Voici queques-unes de mes réalisations</p>
            </Col>
            <Row>
              <Col></Col>
              <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
              <Col></Col>     
            </Row>
          </Row>  
        </Container>
        <Container>    
          <Row className="mb-3">
            <Col>
              <Card>
                <Card.Img variant="top" src= {Fresh} />
                <Card.Body>
                  <Card.Title className="fw-bold">Fresh Food</Card.Title>
                  <Card.Text>
                    Site de vente de produits frais en ligne
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src= {Akira} />
                <Card.Body>
                  <Card.Title className="fw-bold">Reataurant Akira</Card.Title>
                  <Card.Text>
                    Site de vente de produits frais en ligne
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec WordPress</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src= {Etre} />
                <Card.Body>
                  <Card.Title className="fw-bold">Espace bien-être</Card.Title>
                  <Card.Text>
                    Site de vente de produits frais en ligne
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Site réalisé avec LAVAREL</small>
                </Card.Footer>
              </Card>
            </Col>  
          </Row>
          <Row className="mb-3">
            <Col>
              <Card>
                <Card.Img variant="top" src= {Seo} />
                <Card.Body>
                  <Card.Title className="fw-bold">SEO</Card.Title>
                  <Card.Text>
                    Amélioration du référencement d'un site e-commerce
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Utilisation des outils SEO</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src= {CreationApi} />
                <Card.Body>
                  <Card.Title className="fw-bold">Création d'une API</Card.Title>
                  <Card.Text>
                    Création d'une API RESTFULL publique
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">PHP - SYMPHONY</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src= {Maquet} />
                <Card.Body>
                  <Card.Title className="fw-bold">Maquette d'un site web</Card.Title>
                  <Card.Text>
                    Création du prototype d'un site
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
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

