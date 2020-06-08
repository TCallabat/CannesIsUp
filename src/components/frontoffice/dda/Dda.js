/**
 * DDA.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

/* Component */
class Dda extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0 bg-black" style={{ background: "url(./fond_dda.jpg) no-repeat center", backgroundSize: "cover" }}>
                <Container className="pb-5">
                    <Row>
                        <Col sm={12} align="center">
                            <h1 className="titleWhite">DDA îles de Lérins</h1>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: "1rem" }}>
                        <Col md={{ span: 10, offset: 1 }} className="text-center">
                            <h2 className="titleBlue">Cannes Is Up vous invite à participer à son événement majeur : DDA Iles de Lérins, <br />un événement French Tech « <em>pas comme les autres</em> »...</h2>
                            <p className="text-white">Plus de 250 acteurs innovants du territoires : entrepreneurs, décideurs, investisseurs, institutionnels, journalistes et personnalités se réuniront pour un moment festif, convivial et professionnel.</p>
                            <h2 className="titlePink">Réservez dés à present votre <u>Vendredi 6 Septembre 2019</u> !</h2>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: "3rem" }}>
                        <Col md={6}>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/FsxeaiYWKKU" allowfullscreen frameborder="0"></iframe>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h2 className="titleBlue">DDA comme...</h2>
                            <h2 className="titlePink">Déconnectez-vous</h2>
                            <p className="text-white">On confisque vos téléphones portables pour privilégier des échanges de la vie réelle !</p>
                            <h2 className="titlePink">Détendez-vous</h2>
                            <p className="text-white">Interdiction de porter un costume, une cravate, des talons ou un tailleur !</p>
                            <h2 className="titlePink">Amusez-vous</h2>
                            <p className="text-white">Des activités sportives et culturelles à partager entre professionnels !</p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: "3rem" }}>
                        <Col md={{ span: 10, offset: 1 }} className="text-center">
                            <h2 className="titleBlue">Les inscriptions à DDA Iles de Lérins sont ouvertes !</h2>
                            <div>
                                <button className="btnPink mx-3 mb-2">Je m'inscris a DDA !</button>
                                <button className="btnPink mx-3 mb-2">Voir la plaquette</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

/* Export */
export default Dda;