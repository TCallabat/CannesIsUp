import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

class RegisterLogin extends Component {
    render() {
        return (
            <Container className="login">
                <h1 className="titleGrey mt-5 mb-3">Identifiant de connexion</h1>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Email (privé) *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="loginEmail" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Mot de passe *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="loginPassword" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Contrôle mot de passe*</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="loginPassword2" />
                    </Col>
                </Form.Group>
            </Container>
        );
    }
}

export default RegisterLogin;