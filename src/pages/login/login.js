import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import './login.css';
import { useHistory } from "react-router-dom";
import pop3 from '../../services/pop3-connection';

const Login = () => {

    const onChange = (e) => {
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        pop3.all();
    }

    return (
        <section id="login-page">
            <Container className='page'>
            <Form className = 'form' onSubmit={onSubmit}>
                <h2>LOGIN</h2>
                <Form.Group >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    name={'username'}
                    onChange={onChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name={'password'}
                    type={'password'}
                    onChange={onChange}
                />
                </Form.Group>

                <br></br>

                <Button className={'btn my-btn-primary'} onClick={onSubmit}>
                Login
                </Button>
            </Form>
        </Container>
        </section>
        
    );
}

export default Login;