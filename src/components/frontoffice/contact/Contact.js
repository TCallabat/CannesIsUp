/**
 * CONTACT.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

/* Component */
class Contact extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                
                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">Contact</h1>
                    </Col>
                </Row>
            
                <Container style={{ padding: "3rem 0" }}>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="titleGrey">Coordonnées</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col sm={{ span: 4, offset: 2 }} align="center">
                            <p>
                                <i className="fa fa-3x fa-map-marker text-pink"></i>
                            </p>
                            <p>
                                <span>CréACannes</span><br />
                                <span>11 Avenue Maurice Chevalier</span><br />
                                <span>06150 Cannes La Bocca</span>
                            </p>
                        </Col>
                        <Col sm={4} align="center">
                            <p>
                                <i className="fa fa-3x fa-envelope-o text-pink"></i>
                            </p>
                            <p>Presse - Partenaires - Adhérents</p>
                            <p>
                                <a className="text-blue" style={{ fontSize: "1rem", fontWeight: 700 }} href="mailto:contact@cannesisup.com">contact@cannesisup.com</a>
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Container>
        );
    }
}

/* Export */
export default Contact;