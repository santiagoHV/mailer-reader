import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const InboxItem = ({ data }) => {
    return (
        <Card className={'mt-4'} style={{ width: '100%' }}>
            <Card.Header>Nuevo mensaje</Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>{`De: ${data.from} - ${data.date}`}</ListGroup.Item>
            <ListGroup.Item>{`Asunto: ${data.subject}`}</ListGroup.Item>
            <ListGroup.Item>{`${data.message}`}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default InboxItem;