import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
        <Form.Control placeholder="Votre nom" aria-describedby="votre nom" className="mb-2"/>
        <Form.Control type="email" placeholder="Votre adresse email" aria-describedby="votre adresse email" className="mb-2"/>
        <Form.Control type="phone" placeholder="Votre numéro de téléphone" aria-describedby="Votre numéro de téléphone" className="mb-2"/>
        <Form.Control placeholder="Sujet" aria-describedby="sujet" className="mb-2"/>
        <Form.Control as="textarea" placeholder="Votre message" aria-describedby="votre message" rows={15} className="mb-2"/>
        <div class="d-grid justify-content-center">
            <Button variant="primary" type="submit" className="align-center">
            Envoyer
            </Button>
        </div>
    </Form>
  );
}

export default ContactForm;