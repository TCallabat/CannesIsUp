/**
 * HOME.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Component */
class Home extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Container fluid className="m-0 p-0 bg-black" style={{ minHeight: "40rem", backgroundImage: "url(./fond_slide.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center" style={{ marginTop: "8rem" }}>
                            <img className="pb-3" src="./icone.png" alt="icone" />
                            <p className="text-white" style={{ fontWeight: 900, fontSize: "2.5rem", lineHeight: "2.5rem", textShadow: "3px 3px 5px #000000" }}>L'association French Tech Côte d'Azur<br />du bassin Cannois !</p>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "3rem 0" }}>
                    <Container>
                        <Row className="m-0 p-0">
                            <Col sm={12} align="center">
                                <h1 className="titleGrey">Cannes Is Up</h1>
                            </Col>
                        </Row>
                        <Row className="pt-4">
                            <Col md={7}>
                                <Image fluid src="./logo-french-tech-cote-dazur.png" width="100%" />
                            </Col>
                            <Col md={5}>
                                <h2 className="titleBlue">Cannes Is Up est le 4ème pilier de la French Tech Côte d’Azur</h2>
                                <p>Cannes Is Up se positionne aux cotés de Telecom Valley, des Entrepreneurs du Pays de Grasse et de Nice Start(s) Up avec pour mission de <strong>fédérer</strong>, <strong>accélérer</strong> et <strong>faire rayonner</strong> les entreprises innovantes et créatives du bassin Cannois.</p>
                                <Link to="/adherer">
                                    <button className="btnPink">Devenez adhérent</button>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: "3rem" }}>
                            <Col md={{ span: 8, offset: 2 }}>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DSJthgXC300" allowfullscreen frameborder="0"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </Container>
        );
    }
}

/* Export */
export default Home;