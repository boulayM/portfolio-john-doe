import { Button, Modal, Container, Row, Col, } from "react-bootstrap";
import { useState } from "react";

const ModalHome = (props)=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        <>
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className = "bg-dark text-light">
          <Modal.Title>Mon profil Github</Modal.Title>
        </Modal.Header>
        <Modal.Body className = "bg-dark text-light">
            <Container>
                <Row>
                    <Col sm={12} md={6} id="avatar">
                    </Col>
                    <Col sm={12} md={6}>
                        <Row className="border border-secondary border-1 border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-person"><a href="https://github.com/github-john-doe">  John Doe</a></i>
                        </Row>
                        <Row className="border border-secondary border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-geo-alt"></i>
                        </Row>
                        <Row className="border border-secondary border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-card-text">    As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.</i>
                        </Row>
                        <Row className="border border-secondary border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-box"> Repositories: 1</i>
                        </Row>
                        <Row className="border border-secondary border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-suit-heart">  Followers: 16</i>
                        </Row>
                        <Row className="border border-secondary border-top-0 border-end-0 border-start-0">
                            <i class="bi bi-suit-heart">  Following: 1</i>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer className = "bg-dark text-light">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}
export default ModalHome;