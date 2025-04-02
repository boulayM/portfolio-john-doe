import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Realisations = ()=>{
  return (
    <div>
      <div className="portfolioHeader ratio ratio-21x9"></div>
        <Container fluid="md" className="text-center mt-0">
          <Row>
            <Col>
              <h1 className="fw-bold">Portfolio</h1>
              <p>Voici queques-unes de mes réalisations</p>
              <div id="trait" className="bg-primary"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/restaurant-japonais.jpg" />
                <Card.Body>
                  <Card.Title className="fw-bold">Fresh Food</Card.Title>
                  <Card.Text>
                    Site de vente de produits frais en ligne.
                  </Card.Text>
                  <Button variant="primary">Voir le site</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>  
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>  
          </Row>
      </Container>
  </div>

  )
}
export default Realisations;
