/**
 * PARTENAIRES.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

/* Component */
class Partenaires extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">Nos Partenaires</h1>
                    </Col>
                </Row>
                <Container fluid style={{ padding: "3rem 0" }}>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="h3 titleBlue">- PARTENAIRES MAJEURS -</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center">
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_01.jpg" alt="Communauté d'Agglomération Cannes Pays de Lérins" />
                            <a className="text-nowrap partenaires" href="http://www.paysdelerins.fr/" target="_blank">paysdelerins.fr</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_majeurs_02.jpg" alt="Ville de Cannes" />
                            <a className="text-nowrap partenaires" href="http://www.cannes.com/" target="_blank" >cannes.com</a>
                        </Col>
                    </Row>
                    <hr style={{ padding: "1rem 0" }} />
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="h3 titleBlue">- PARTENAIRES OFFICIELS -</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center">
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_officiels_01.jpg" alt="CIS Îles de Lérins - Cannes Jeunesse" />
                            <a className="text-nowrap partenaires" href="http://www.cannes-jeunesse.fr/cis/presentation.html" target="_blank">cannes-jeunesse.fr/cis</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_officiels_02.jpg" alt="French Tech Côte d'Azur" />
                            <a className="text-nowrap partenaires" href="https://www.frenchtechcotedazur.fr/" target="_blank">frenchtechcotedazur.fr</a>
                        </Col>
                    </Row>
                    <hr style={{ padding: "1rem 0" }} />
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="h3 titleBlue">- SPONSORS -</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center">
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_01.jpg" alt="VENTURY Avocats - EY" />
                            <a className="w-100 partenaires" href="https://www.ey-avocats.com/ft/fr/services/ey-ventury-avocats" target="_blank">ey-avocats.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_02.jpg" alt="Audit Consulting Group" />
                            <a className="text-nowrap partenaires" href="https://www.audit-consulting-group.com/" target="_blank">audit-consulting-group.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_03.jpg" alt="GAN Assurences - Cabinet Chrystel Dubreuil" />
                            <a className="text-nowrap partenaires" href="http://www.grasse-assurance.fr/" target="_blank">grasse-assurance.fr</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_04.jpg" alt="Corporate Assistance" />
                            <a className="text-nowrap partenaires" href="http://corporate-assistance.com/" target="_blank">corporate-assistance.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_05.jpg" alt="INRIA" />
                            <a className="text-nowrap partenaires" href="https://www.inria.fr/" target="_blank">inria.fr</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_06.jpg" alt="Vinci Autoroutes" />
                            <a className="text-nowrap partenaires" href="https://www.vinci-autoroutes.com/fr" target="_blank">vinci-autoroutes.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_07.jpg" alt="Amadeus" />
                            <a className="text-nowrap partenaires" href="https://amadeus.com/fr" target="_blank">amadeus.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_08.jpg" alt="E.Leclerc Le Cannet" />
                            <a className="text-nowrap partenaires" href="http://www.e-leclerc.com/le-cannet" target="_blank">e-leclerc.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_sponsors_09.jpg" alt="La Plage du Festival Cannes" />
                            <a className="text-nowrap partenaires" href="https://www.plage-festival-cannes.com/index.php/fr/" target="_blank" >plage-festival-cannes.com</a>
                        </Col>
                    </Row>
                    <hr style={{ padding: "1rem 0" }} />
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="h3 titleBlue">- PARTENAIRES RESEAUX -</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center">
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_reseaux_01.jpg" alt="Telecom Valley" />
                            <a className="text-nowrap partenaires" href="http://www.telecom-valley.fr/" target="_blank" >telecom-valley.fr</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_reseaux_02.jpg" alt="Club des Entrepreneurs du Pays de Grasse" />
                            <a className="text-nowrap partenaires" href="http://club-entrepreneurs-grasse.com/site/" target="_blank" >club-entrepreneurs-grasse.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_reseaux_03.jpg" alt="Nice Start(s) Up" />
                            <a className="text-nowrap partenaires" href="https://www.nicestartsup.com/" target="_blank" >nicestartsup.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_reseaux_04.jpg" alt="UPE 06" />
                            <a className="text-nowrap partenaires" href="http://www.upe06.com/" target="_blank" >upe06.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_reseaux_05.jpg" alt="Réseau Entreprendre" />
                            <a className="text-nowrap partenaires" href="https://www.reseau-entreprendre.org/fr/accueil/" target="_blank">reseau-entreprendre.org</a>
                        </Col>
                    </Row>
                    <hr style={{ padding: "1rem 0" }} />
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="h3 titleBlue">- PARTENAIRES MEDIAS -</h2>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center">
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_01.jpg" alt="Cannes Radio" />
                            <a className="text-nowrap partenaires" href="https://www.cannesradio.com/" target="_blank" >cannesradio.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_02.jpg" alt="Tribune Bulletin Côte d'Azur" />
                            <a className="text-nowrap partenaires" href="https://tribuca.net/" target="_blank" >tribuca.net</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_03.jpg" alt="Sophia Mag - Métropole Mag" />
                            <a className="text-nowrap partenaires" href="http://sophia-mag.com/" target="_blank" >sophia-mag.com</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_04.jpg" alt="Les Petites Affiches" />
                            <a className="text-nowrap partenaires" href="https://www.petitesaffiches.fr/" target="_blank" >petitesaffiches.fr</a>
                        </Col>
                        <Col md={2} sm={6} xs={6} className="text-center">
                            <Image fluid className="w-75" src="./partenaires/logos_medias_05.jpg" alt="La Tribune PACA" />
                            <a className="text-nowrap partenaires" href="https://marseille.latribune.fr/" target="_blank" >latribune.fr</a>
                        </Col>
                    </Row>
                </Container>
            </Container >
        );
    }
}

/* Export */
export default Partenaires;