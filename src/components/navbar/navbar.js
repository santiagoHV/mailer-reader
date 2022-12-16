import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

const NavBar = ({loginData}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">{loginData.user}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;