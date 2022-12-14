import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const InboxItem = ({ item }) => {
    return (
        <Card className={'mt-4'} style={{ width: '100%' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default InboxItem;