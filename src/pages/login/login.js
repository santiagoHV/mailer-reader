import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import './login.css';

const Login = (props) => {
    return (
        <section id="login-page">
            <Container className='page'>
            <Form className = 'form' onSubmit={props.onSubmit}>
                <h2>LOGIN</h2>
                <Form.Group >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    name={'username'}
                    onChange={props.onChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name={'password'}
                    type={'password'}
                    onChange={props.onChange}
                />
                </Form.Group>

                <br></br>

                <Button className={'btn my-btn-primary'} onClick={props.onSubmit}>
                Login
                </Button>
            </Form>
        </Container>
        </section>
        
    );
}

export default Login;