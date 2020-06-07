import React from 'react';
import {ListGroup,Button, Row, Col} from 'react-bootstrap';

import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({data, id, onClick}){
    
    async function handleDelete(){
        await onClick({
            id
        });
    }

    return (
        <ListGroup.Item>
              <Row>
              <Button variant="outline-success">star</Button>
                <Col xs={10} className="bordered-list">
                    <Row>
                        <Col xs={2}>{data.title}</Col>
                        <Col xs= {5}>{data.techs}</Col>
                        <Col xs={4}>{data.url}</Col>
                        <Col xs={1}>{data.likes}</Col>
                    </Row>
                </Col>
                <Col>
                <Button onClick={handleDelete} variant="outline-danger">Delete</Button>
                </Col>
              </Row>
            </ListGroup.Item>
    );
}

export default Cards;