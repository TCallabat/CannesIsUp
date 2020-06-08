import React, { Component } from 'react';
import { Container, Row, Col, Image, Form } from "react-bootstrap";

class RegisterNetwork extends Component {
    render() {
        return (
            <Container className="network">
                <h1 className="titleGrey mt-5 mb-3">Réseaux sociaux</h1>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Facebook (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="facebookUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Instagram (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="instagramUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">LinkedIn (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="linkedinUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Twitter (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="twitterUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Vimeo (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="vimeoUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Viadeo (URL)</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="viadeoUrl" />
                    </Col>
                </Form.Group>
            </Container>
        );
    }
}

export default RegisterNetwork;