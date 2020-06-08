import React, { Component } from 'react';
import { Card, Col, Row, Container, Image } from "react-bootstrap";

class Membre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adherent: [],
        };
    }

    componentDidMount() {
        const address = `http://localhost:8080/member/${this.props.match.params.id}`;

        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        };

        fetch(address, options)
            .then((response) => response.json())
            .then(
                (data) => this.setState({ adherent: data }),
                (error) => console.log(error)
            );
    }

    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Container style={{ padding: "3rem 0" }}>
                    <Row>
                        <Col md={8} className="m-0 px-3">
                            <Card className="h-100" style={{ border: "2px solid #cacaca", borderRadius: "10px" }}>
                                <Row>
                                    <Col md={12}>
                                        <div style={{ width: "100%", height: "9rem", backgroundImage: `url(${this.state.adherent.companyBanner})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                                    </Col>
                                </Row>
                                <Row className="m-2 p-0" style={{ height: "5rem" }}>
                                    <Col md={6}>
                                        <Image fluid className="" src={this.state.adherent.companyLogo} alt={this.state.adherent.companyLogo} />
                                    </Col>
                                    <Col className="pt-4 pr-4 text-right" md={6}>
                                        <a className="text-black text-decoration-none" href={this.state.adherent.companyPresentation} target="_blank" download>
                                            <p style={{ fontSize: "13px" }}>Télécharger la brochure de la société<i className="pl-2 fa fa-2x fa-download text-pink"></i></p>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-2">
                                    <Col md={12}>
                                        <h2 className="text-uppercase text-pink" style={{ fontWeight: 700 }}>{this.state.adherent.companyName}</h2>
                                        <p className="" dangerouslySetInnerHTML={{ __html: this.state.adherent.companyDescription }} ></p>
                                    </Col>
                                </Row>
                                <hr className="m-0" />
                                <Row className="m-2">
                                    <Col md={12}>
                                        <h4 className="text-capitalize text-blue" style={{ fontWeight: 700 }}>Secteur d'activité</h4>
                                        <p className="text-capitalize" style={{ fontWeight: 700 }} >{this.state.adherent.companyActivity}</p>
                                    </Col>
                                </Row>
                                <hr className="m-0" />
                                <Row className="m-2">
                                    <Col md={12}>
                                        <h4 className="text-capitalize text-blue" style={{ fontWeight: 700 }}>Coordonnées</h4>
                                        <Row>
                                            <Col md={2}>
                                                <p className="text-capitalize" style={{ fontWeight: 700 }}>Adresse :</p>
                                            </Col>
                                            <Col md={10}>
                                                <p className="">{this.state.adherent.companyAddress}{this.state.adherent.companyAddressComp && ", " + this.state.adherent.companyAddressComp}<br />{this.state.adherent.companyZip} {this.state.adherent.companyCity}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <p className="text-capitalize" style={{ fontWeight: 700 }}>Téléphone :</p>
                                            </Col>
                                            <Col md={10}>
                                                <p className="">{this.state.adherent.companyPhone}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <p className="text-capitalize" style={{ fontWeight: 700 }}>Email :</p>
                                            </Col>
                                            <Col md={10}>
                                                <p><a className="text-black text-decoration-none" href={`mailto:${this.state.adherent.companyEmail}`}>{this.state.adherent.companyEmail}</a></p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <p className="text-capitalize" style={{ fontWeight: 700 }}>Site web :</p>
                                            </Col>
                                            <Col md={10}>
                                                <p><a className="text-black text-decoration-none" href={this.state.adherent.companyUrl} target="_blank">{this.state.adherent.companyUrl}</a></p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <hr className="m-0" />
                                <Row className="m-2">
                                    <Col md={12}>
                                        <h4 className="text-capitalize text-blue" style={{ fontWeight: 700 }}>Réseaux Sociaux</h4>
                                        <Row>
                                            <Col>
                                                {this.state.adherent.facebookUrl && <a className="pr-3" href={this.state.adherent.facebookUrl} target="_blank"><i class="text-pink fa fa-2x fa-facebook-square"></i></a>}
                                                {this.state.adherent.instagramUrl && <a className="pr-3" href={this.state.adherent.instagramUrl} target="_blank"><i class="text-pink fa fa-2x fa-instagram"></i></a>}
                                                {this.state.adherent.linkedinUrl && <a className="pr-3" href={this.state.adherent.linkedinUrl} target="_blank"><i class="text-pink fa fa-2x fa-linkedin-square"></i></a>}
                                                {this.state.adherent.twitterUrl && <a className="pr-3" href={this.state.adherent.twitterUrl} target="_blank"><i class="text-pink fa fa-2x fa-twitter-square"></i></a>}
                                                {this.state.adherent.vimeoUrl && <a className="pr-3" href={this.state.adherent.vimeoUrl} target="_blank"><i class="text-pink fa fa-2x fa-vimeo-square"></i></a>}
                                                {this.state.adherent.viadeoUrl && <a className="pr-3" href={this.state.adherent.viadeoUrl} target="_blank"><i class="text-pink fa fa-2x fa-viadeo-square"></i></a>}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={4} className="m-0 px-3">
                            <Card className="h-50" style={{ top: "80px", border: "2px solid #cacaca", borderRadius: "10px" }}>
                                <Row>
                                    <Col md={12}>
                                        <img className="img-fluid position-absolute" src={this.state.adherent.contactAvatar} alt={this.state.adherent.contactAvatar} style={{ border: "2px solid #cacaca", borderRadius: "50%", height: "160px", width: "160px", top: "-80px", left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }} />
                                    </Col>
                                </Row>
                                <Row className="mx-2 position-relative" style={{ top: 100 }}>
                                    <Col md={12}>
                                        <h4 className="text-capitalize text-blue" style={{ fontWeight: 700 }}>Dirigeant</h4>
                                        <p><span className="text-capitalize" style={{ fontWeight: 700 }}>{this.state.adherent.contactFirstname}</span><span className="text-uppercase pl-1" style={{ fontWeight: 700 }}>{this.state.adherent.contactLastname}</span><br />{this.state.adherent.contactFunction}</p>
                                        <h4 className="text-capitalize text-blue" style={{ fontWeight: 700 }}>Parole de membre</h4>
                                        <p className="" dangerouslySetInnerHTML={{ __html: this.state.adherent.contactQuote }} ></p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Membre;