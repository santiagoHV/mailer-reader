import React from "react";
import { Container } from "react-bootstrap";
import InboxItem from "./inbox-item";

const Inbox = () => {
    return (
        <Container>
            <h1>Bandeja de entrada</h1>
            <InboxItem />
            <InboxItem />
            <InboxItem />
        </Container>
        )
}

export default Inbox;