/**
 * ACTUALITES.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

/* Component */
class Actualites extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">Actualités</h1>
                    </Col>
                </Row>
                <Container style={{ padding: "3rem 0" }}>
                    <Row className="m-0 p-0">
                        <Col sm={6}>
                            <div className="bg-blue" align="center" style={{ padding: "1.875rem", borderRadius: "1rem", height:"12rem" }}>
                                <span className="text-white text-uppercase" style={{ fontWeight: 900, fontSize: "1.875rem", marginBottom: "1rem" }}>Newsletter</span>
                                <p className="text-white">Recevez par Email toutes nos actualités et invitations aux événements !</p>
                                <a href="http://eepurl.com/dxly2b" className="btnPink" target="_blank">Je m'abonne !</a>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="bg-pink" align="center" style={{ padding: "1.875rem", borderRadius: "1rem", height:"12rem" }}>
                                <span className="text-white text-uppercase" style={{ fontWeight: 900, fontSize: "1.875rem", marginBottom: "1rem" }}>Réseaux Sociaux</span>
                                <p className="text-white">Ne loupez plus une info en nous suivant sur vos réseaux préférés !</p>
                                <a href="https://www.facebook.com/cannesisup/" target="_blank" className="mx-2 text-white">
                                    <i className="fa fa-3x fa-facebook-square"></i>
                                </a>
                                <a href="https://www.instagram.com/cannesisup/" target="_blank" className="mx-2 text-white">
                                    <i className="fa fa-3x fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCBIpW614EFQGZrFVl6ARsAw" className="_blank" className="mx-2 text-white">
                                    <i className="fa fa-3x fa-youtube-square"></i>
                                </a>
                                <a href="https://twitter.com/cannesisup" target="_blank" className="mx-2 text-white">
                                    <i className="fa fa-3x fa-twitter-square"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

/* Export */
export default Actualites;