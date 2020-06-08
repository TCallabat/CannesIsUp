/**
 * REGISTER.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import RegisterCompany from "./RegisterCompany";
import RegisterNetwork from "./RegisterNetwork";
import RegisterContact from "./RegisterContact";
import RegisterLogin from "./RegisterLogin";
import RegisterPayment from "./RegisterPayment";
import RegisterLegal from "./RegisterLegal";

/* Component */
class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const body = new FormData(e.target);
        /*
        if (body.get("passwordMember") !== body.get("confirmPasswordMember")) {
            alert("vos mots de passe sont différents");
        }
        */

        console.log(body)

        fetch("http://localhost:8080/member", {
            method: "POST",
            mode: "cors",
            body: body,
        })
            .then((response) => response.json())
            .then(
                (data) => { console.log(data) },
                (error) => { console.log(error) }
            );
    };


    render() {
        return (
            <Container fluid className="m-0 p-0">
                <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                    <Container fluid className="m-0 px-0 pt-0 pb-5 bg-light">
                        <Row>
                            <Col md={6}>
                                <RegisterCompany />
                                <RegisterNetwork />
                            </Col>
                            <Col md={6}>
                                <RegisterContact />
                                <RegisterLogin />
                                <RegisterPayment />
                                <RegisterLegal />
                                <Col className="mt-5" align="center"  >
                                    <button className="btnPink">Envoyer le formulaire</button>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </Container >
        );
    }
}

/* Export */
export default Register;