import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Container fluid className="bg-blue" style={{ padding: "3rem 0 6rem 0", fontSize: "1rem" }}>
                <Container>
                    <Row>
                        <Col md={8}>
                            <p className="text-white">Copyright © CANNES IS UP - <Link className="text-white" to="/mentions-legales">Mentions légales</Link> - <a className="text-white" href="https://bluebeacon.fr/" target="_blank">Réalisation : BLUE BEACON</a></p>
                        </Col>
                        <Col md={4}>
                                <a className="text-white px-3" href="https://www.facebook.com/cannesisup/" target="_blank">
                                    <i class="fa fa-3x fa-facebook-square"></i>
                                </a>
                                <a className="text-white px-3" href="https://www.instagram.com/cannesisup/" target="_blank">
                                    <i class="fa fa-3x fa-instagram"></i>
                                </a>
                                <a className="text-white px-3" href="https://www.youtube.com/channel/UCBIpW614EFQGZrFVl6ARsAw" target="_blank">
                                    <i class="fa fa-3x fa-youtube-square"></i>
                                </a>
                                <a className="text-white px-3" href="https://twitter.com/cannesisup" target="_blank">
                                    <i class="fa fa-3x fa-twitter-square"></i>
                                </a>
                            </Col>
                    </Row>
                </Container>
                </Container>
        );
    }
}

export default Footer;