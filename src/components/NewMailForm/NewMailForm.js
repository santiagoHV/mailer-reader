import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewMailForm = ({loginData, setLoginData}) => {

    const [data, setData] = React.useState({
        message: '',
        subject: '',
        to: ''
    });
        

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const content = await response.json();
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Container>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Destinatario</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={handleChange}
                            name="to"
                            />
                        </Form.Group>   
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control 
                            placeholder="Ingresa asunto" 
                            name="subject"
                            onChange={handleChange}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        onChange={handleChange}
                        name="message"
                        />
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"
                    onChange={handleChange}
                    onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default NewMailForm;