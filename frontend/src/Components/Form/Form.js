import React, {useState} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

import api from '../../Services/Api';

import 'bootstrap/dist/css/bootstrap.min.css';

function Forms(){
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [techs, setTechs] = useState('');

   
    async function handleSubmit(event){
        event.preventDefault()
        await api.post('repositories', {
            title,
            url,
            techs
        })
        setTitle('')
        setUrl('')
        setTechs('')
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
            
                <Col>
                <Form.Control  
                placeholder="Titulo"
                value={title}
                onChange={event => setTitle(event.target.value)}
                required
                />
                </Col>
                
                <Col>
                <Form.Control  
                placeholder="Url"
                value={url}
                onChange={event => setUrl(event.target.value)}
                required
                />
                </Col>
                
                <Col>
                <Form.Control  
                placeholder="Tecnologias"
                value={techs}
                onChange={event => setTechs(event.target.value)}
                required
                />
                </Col>
                
                <Col>
                <Button type="submit" variant="outline-primary" block>Submeter</Button>
                </Col>
            
            </Row>
        </Form>
    );
}

export default Forms;