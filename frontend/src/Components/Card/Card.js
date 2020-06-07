import React, { useState } from 'react';
import {ListGroup,Button, Row, Col} from 'react-bootstrap';

import api from '../../Services/Api';

import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({data, id, onClick}){
    
    async function handleDelete(){
        await onClick({id});
    }

    async function handleStar(){
        await api.post('repositories/like', {id})
    }

    return (
        <ListGroup.Item>
            <Row>
              
              <Button onClick={handleStar} variant="outline-success">star</Button>

                <Col xs={10} className="bordered-list">
                    <Row>
                        <Col>{data.title}</Col>
                        <Col>{data.techs}</Col>
                        <Col>{data.url}</Col>
                        <Col>{data.likes}</Col>
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