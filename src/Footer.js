import { Container, Col, Row, Nav, NavLink, Stack } from "react-bootstrap";

function Footer () {
    return (
        <footer>
            <Container fluid>
                <Row className = "bg-dark text-light p-4">
                    <Col className="mx-5">
                        <div className="lh-1">
                        <h1>John Doe</h1>
                        <p>40 rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p>10 20 30 40 50</p>
                        <p>johndoe@gmail.com</p>
                        </div>
                        <a href="https://github.com/" target="blank" className="link-light"><i class="bi bi-github fs-2"></i></a>

                    </Col>
                    <Col className="mx-5">
                        colone2
                    </Col>
                    <Col className="mx-5">
                        colone3
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;