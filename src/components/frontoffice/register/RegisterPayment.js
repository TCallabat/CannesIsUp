import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

class RegisterPayment extends Component {
    render() {
        return (
            <Container className="payment">
                <h1 className="titleGrey mt-5 mb-3">Cotisation</h1>
                <Form.Group >
                    <Form.Label >L'adhésion à Cannes Is Up est soumise à une cotisation de 50 €uros par an.</Form.Label>
                    <Form.Check type="radio" name="paymentType" value="1" label="Paiement par virement bancaire" />
                    <Form.Check type="radio" name="paymentType" value="2" label="Paiement par carte bancaire" />
                </Form.Group>
            </Container>
        );
    }
}

export default RegisterPayment;