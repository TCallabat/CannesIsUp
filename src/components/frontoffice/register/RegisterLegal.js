import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

class RegisterLegal extends Component {
    render() {
        return (
            <Container className="legal">
                <h1 className="titleGrey mt-5 mb-3">Mentions légales</h1>
                <Form.Group>
                    <Form.Check type="checkbox" name="legal" label="Chartre Cannes Is Up" />
                    <Form.Check type="checkbox" name="legal" label="Chartre RGPD" />
                </Form.Group>
            </Container>
        );
    }
}

export default RegisterLegal;