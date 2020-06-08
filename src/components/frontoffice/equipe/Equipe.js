/**
 * EQUIPE.JS => ok
 */

/* Import */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Component */
class Equipe extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">

                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">l'équipe cannes is up</h1>
                    </Col>
                </Row>
                <Container style={{ padding: "3rem 0" }}>
                    <Row>
                        <Col md={7}>
                            <img className="w-100 h-100" src="./galeries/equipe/23.jpg" />
                        </Col>
                        <Col md={5}>
                            <h2 className="titleBlue">Cannes Is Up c’est avant tout la force de ses bénévoles, partenaires et adhérents qui œuvrent à faire rayonner l’écosystème de l’innovation du bassin Cannois dans la joie et la bonne humeur !</h2>
                            <p>Epicentre de ses relations professionnelles « pas comme les autres », les événements DDA (Déconnectez-vous / Détendez-vous / Amusez-vous) jalonnent l’année avec des thématiques variées, funs et propices aux échanges amicaux afin de vous permettre de « briser la glace » beaucoup plus facilement !</p>
                            <h2 className="titlePink">Alors qu’attendez-vous ?</h2>
                            <Link to="/adherer">
                                <button className="btnPink">Rejoignez-nous !</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "3rem 0" }}>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="titleGrey">Bureau</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/seb.jpg" alt="Sebastien AUBERT" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p className="text-blue" style={{ fontSize: "1rem", fontWeight: 900 }}>Président</p>
                            <p>
                                <span className="font-weight-bold">Sébastien AUBERT</span><br />
                                <span className="font-italic">Gérant</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Adastra Films</span><br />
                                <span>Production audiovisuelle</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.adastra-films.com/" target="_blank">adastra-films.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/idriss.jpg" alt="Idriss SISAID" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p className="text-blue" style={{ fontSize: "1rem", fontWeight: 900 }}>Vice-Président</p>
                            <p>
                                <span className="font-weight-bold">Idriss SISAID</span><br />
                                <span className="font-italic">Co-fondateur & Président</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>O’SOL</span><br />
                                <span>Energies renouvelables - Smart power supplies</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://osol.fr/" target="_blank">osol.fr<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/laurent.jpg" alt="Laurent DYS" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p className="text-blue" style={{ fontSize: "1rem", fontWeight: 900 }}>Vice-Président</p>
                            <p>
                                <span className="font-weight-bold">Laurent DYS</span><br />
                                <span className="font-italic">Directeur Général Associé</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Corporate Assistance</span><br />
                                <span>Leader National de l'assurance prud'homale</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="http://corporate-assistance.com/" target="_blank">corporate-assistance.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/lucas.jpg" alt="Lucas GRIMONT" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p className="text-blue" style={{ fontSize: "1rem", fontWeight: 900 }}>Secrétaire</p>
                            <p>
                                <span className="font-weight-bold">Lucas GRIMONT</span><br />
                                <span className="font-italic">Président</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>BrainyUP</span><br />
                                <span>Formation en ligne</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.brainyup.com/" target="_blank">brainyup.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col sm={12} align="center">
                            <h2 className="titleGrey">Conseil d'administration</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/olivier.jpg" alt="Olivier ROUBIN" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Olivier ROUBIN</span><br />
                                <span className="font-italic">Président Fondateur</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Cap@city - monpanierbleu.com</span><br />
                                <span>Conseil digital - Marketplace foodtech & événementiel</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://cap-a-city.fr/" target="_blank">cap-a-city.fr<i className="fa fa-external-link pl-2"></i></a> - <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://monpanierbleu.com/fr/" target="_blank">monpanierbleu.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/isabelle.jpg" alt="Isabelle DE SAINT LEGER" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Isabelle DE SAINT LEGER</span><br />
                                <span className="font-italic">Fondatrice</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>ISL Marketing</span><br />
                                <span>Marketing, Géomarketing & Communication</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="http://isl.marketing/" target="_blank">isl.marketing<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/greg.jpg" alt="Grégory BIONDO" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Grégory BIONDO</span><br />
                                <span className="font-italic">CEO & Co-fondateur</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Blue Beacon</span><br />
                                <span>Mobile Marketing Solutions - Développement d’application mobile</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.bluebeacon.fr/" target="_blank">bluebeacon.fr<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/pedro.jpg" alt="Pedro MELENDEZ" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Pedro MELENDEZ</span><br />
                                <span className="font-italic">COO EMEA</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Funifier Inc</span><br />
                                <span>Gamification Solutions</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.funifier.com/" target="_blank">funifier.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/mike.jpg" alt="Michaël GIORDANO" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Michaël GIORDANO</span><br />
                                <span className="font-italic">Fondateur - Réalisateur - Pilote de drone</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Azur 360</span><br />
                                <span>Réalisation de films d’entreprise, films à 360 degrés et prise de vues aériennes par drone</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.azur-360.com/" target="_blank">azur-360.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/fabien.jpg" alt="Fabien GIAUSSERAN" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Fabien GIAUSSERAN</span><br />
                                <span className="font-italic">Directeur Adjoint - Division Parfumerie</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Robertet</span><br />
                                <span>Un des leaders mondiaux de la parfumerie, des arômes alimentaires et des matières premières</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.robertet.com/" target="_blank">robertet.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/sandrine.jpg" alt="Sandrine JULIEN" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Sandrine JULIEN</span><br />
                                <span className="font-italic">Dirigeante Fondatrice</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>Couleur Velvet</span><br />
                                <span>Agence spécialisée en branding et communication des entreprises</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="https://www.couleurvelvet.com/" target="_blank">couleurvelvet.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                        <Col sm={4} align="center" style={{ marginBottom: "1.875rem", padding: "0 1.875rem" }}>
                            <Image fluid src="./equipe/nicolas.jpg" alt="Nicolas MONACI" style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)", marginBottom: "1rem" }} />
                            <p>
                                <span className="font-weight-bold">Nicolas MONACI</span><br />
                                <span className="font-italic">Gérant</span><br />
                                <span className="text-pink" style={{ fontWeight: 900 }}>A.C.T</span><br />
                                <span>Ingénierie Informatique</span><br />
                                <a style={{ paddingTop: "0.5rem", display: "inline-table" }} href="http://www.alphaconseils.com/" target="_blank">alphaconseils.com<i className="fa fa-external-link pl-2"></i></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

/* Export */
export default Equipe;