import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import './login.css';
import { useNavigate } from "react-router-dom";
// import pop3 from '../../services/pop3-connection';

const Login = ({loginData, setLoginData}) => {

    
    const navigate = useNavigate();
        

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const content = await response.json();

        if (content.status === 'ok') {
            navigate('/mailer');
        } else {
            alert('credenciales incorrectas');
            console.log('error');
        }
    }

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="login-page">
            <Container className='page'>
            <Form className = 'form'>
                <h2>LOGIN</h2>
                <Form.Group >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    name={'email'}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name={'password'}
                    type={'password'}
                    onChange={handleChange}
                />
                </Form.Group>

                <br></br>

                <Button className={'btn my-btn-primary'} onClick={handleSubmit}>
                Login
                </Button>
            </Form>
        </Container>
        </section>
        
    );
}

export default Login;