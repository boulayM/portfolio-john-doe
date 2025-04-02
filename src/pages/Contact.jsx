import "../App.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = ()=> {
    return (


    <Container className="mt-5 pt-5 text-center">

        <h1 className="fw-bold">Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <Row>
            <Col></Col>
            <Col><hr className="border border-primary border-3 opacity-100 mb-5"/></Col>
            <Col></Col>
        
        </Row>

        <Card body className="mb-4 cardBox">
            <Row className="text-start">
                <Col>
                    <h4 className="fw-bold">Formulaire de contact</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <ContactForm />

                </Col>

                <Col>
                    <h4 className="fw-bold">Mes coordonnées</h4>
                    <hr className="border border-primary border-2 opacity-100 mb-5"/>
                    <ul className="list-group list-unstyled">
                        <li><i class="bi bi-map">  40 rue Laure Diebold</i></li>
                        <li><i class="bi bi-geo-alt">  69009 Lyon, France</i></li>
                        <li><i class="bi bi-phone">  10 20 30 40 50</i></li>
                        <li><i class="bi bi-envelope-at">  johndoe@gmail.com</i></li>
                    </ul>
                    <div className="mt-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621757!2d4.79640397599675!3d45.77866197108087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1spt-BR!2sfr!4v1743577767491!5m2!1spt-BR!2sfr" width="600" height="450" styleName="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="adresse"></iframe>
                    </div>

                </Col>
            </Row>
        </Card>

        
    </Container>

    )
}

export default Contact;