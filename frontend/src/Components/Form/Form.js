import React, {useState} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Forms({onSubmit}){
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit(event){
        await onSubmit({
            title,
            url,
            techs
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col><Form.Control  
                placeholder="Titulo"
                value={title}
                onChange={event => setTitle(event.target.value)}
                /></Col>
                <Col><Form.Control  
                placeholder="Url"
                value={url}
                onChange={event => setUrl(event.target.value)}
                /></Col>
                <Col><Form.Control  
                placeholder="Tecnologias"
                value={techs}
                onChange={event => setTechs(event.target.value)}
                /></Col>
                <Col><Button type="submit" variant="outline-primary" block>Submeter</Button></Col>
            </Row>
        </Form>
    );
}

export default Forms;