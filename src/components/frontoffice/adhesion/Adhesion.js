import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Adhesion extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">Adhésion</h1>
                    </Col>
                </Row>
                <Container style={{ padding: "3rem 0" }}>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="titleGrey">Rejoignez-nous !</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7}>
                            <Image fluid src="./logo-french-tech-cote-dazur.png" width="100%" />
                        </Col>
                        <Col sm={5}>
                            <h2 className="titleBlue">Comment adhérer ?</h2>
                            <h2 className="titlePink">Vous représentez ou travaillez dans une entreprise innovante et/ou créative du bassin Cannois ?<br />Rejoignez-nous !</h2>
                            <ol>
                                <li>Remplissez notre formulaire d’adhésion en ligne (lien ci-dessous)</li>
                                <li>Une fois réceptionnée, notre équipe transmet votre candidature au Conseil d’Administration pour approbation.</li>
                            </ol>
                            <Link to="/adherer/formulaire">
                                <button className="btnPink">Formulaire d’adhésion</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "3rem 0" }}>
                    <Row>
                        <Col sm={{ span: 8, offset: 2 }}>
                            <h2 className="titleBlue">Pourquoi est-il important pour vous d’adhérer ?</h2>
                            <ul>
                                <li><strong>Bénéficier de réductions jusqu’à 50%</strong> sur tous nos évènements !</li>
                                <li>Faire partie de la newsletter et <strong>rester informé de l’actualité de la French Tech</strong> : délégations sur des salons, évènements, concours, appels à projets, marchés publics...</li>
                                <li><strong>Tirer profit des supports de communication</strong> de CANNES IS UP pour partager vos actualités : facebook, twitter, linkedin, relais presse...</li>
                                <li><strong>Bénéficier de la mutualisation de certains coûts</strong> : formations, stand sur des salons, abonnement presse, services aux entreprises...</li>
                                <li><strong>Faire entendre sa voix</strong> auprès d’une association représentative des entrepreneurs locaux !</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Adhesion;