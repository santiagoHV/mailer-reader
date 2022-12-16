import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const NewMailForm = ({loginData, setLoginData}) => {
    const navigate = useNavigate();

    const [data, setData] = React.useState({
        sender: '', 
        message: '',
        subject: '',
        recipients: ''
    });
        

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://redesmails.com:5000/smtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });

        const content = await response.json();

        if (content.message === 'Email sent!') {
            alert('Mail sent');
            setData({
                sender: '',
                message: '',
                subject: '',
                recipients: ''
            })
        } else {
            alert('Error'); 
            navigate('/')
        }
    }

    const handleChange = (e) => {
        setData({
            ...data,
            sender: loginData.user,
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
                            name="recipients"
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
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default NewMailForm;