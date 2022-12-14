import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewMailForm = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Destinatario</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>   
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control placeholder="Ingresa asunto" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default NewMailForm;