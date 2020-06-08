import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

class Legal extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row className="m-0 p-0" style={{ width: "100%", height: "9rem", background: "url(./fond_contact.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col sm={12} align="center">
                        <h1 className="titleWhite">Mentions légales</h1>
                    </Col>
                </Row>
                <Container className="py-5">
                    <Row>
                        <Col sm={12}>
                            <h2 className="titleBlue pb-2">Présentation générale</h2>
                            <p>Le site Internet « cannesisup.com » est édité par :</p>
                            <p>CANNES IS UP, association de loi 1901 immatriculée à Cannes sous le numéro  841 534 308 00017.<br />Son siège social est situé : CréACannes,  11 Avenue Maurice Chevalier, 06150 Cannes La Bocca</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Directeur de la publication</h2>
                            <p>Sébastien Aubert en tant que président de CANNES IS UP</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Hébergement</h2>
                            <p>Le site Internet « cannesisup.com » est hébergé par :</p>
                            <p>OVH France, SAS immatriculée à Lille sous le numéro 424 761 419 00045.<br />Son siège social est situé : 2 rue Kellermann,  59100 Roubaix</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Liens hypertextes</h2>
                            <p>La création de liens hypertextes vers le site « cannesisup.com » est soumise à l'accord préalable du Directeur de la Publication.</p>
                            <p>Les liens hypertextes établis en direction d'autres sites à partir de « cannesisup.com » ne sauraient, en aucun cas, engager la responsabilité de CANNES IS UP.</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Droits d'auteurs</h2>
                            <p>La reproduction ou représentation, intégrale ou partielle, des pages, des données et de tout autre élément constitutif au site, par quelque procédé ou support que ce soit, est interdite et constitue, sans autorisation du Directeur de la Publication, une contrefaçon.</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Cookies d'audience et de Statistiques</h2>
                            <p>L’utilisateur est informé que lors de ses visites sur ce site, un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur.</p>
                            <p>Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation sur un site Internet. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
                            <p>Les cookies ont une durée de validité de 365 jours maximum.</p>
                            <p>Votre consentement pour l’acceptation des cookies est demandé lors de votre première connexion au site « cannesisup.com » par l'affichage d’un bandeau d'information. Il sera de nouveau sollicité à l'issu du délai maximum de validité du cookie par l'affichage du bandeau d'information quel que soit la page visité sur ce site, ou à l'effacement du cache de votre navigateur avant la fin de cession de durée de validation.</p>
                            <p>Le règlement général européen sur la protection des données vous donne le droit de gérer les données stockées et utilisées par un site tiers via les cookies, bien que leur présence soit généralement sans conséquence. Vous avez la possibilité de bloquer une partie ou la totalité des cookies ou supprimer ceux déjà installés sur votre terminal en modifiant les paramètres de votre navigateur internet.</p>
                            <hr />
                            <h2 className="titleBlue pb-2">Données personnelles</h2>
                            <p>Les informations que vous saisissez via les formulaires du site sont traitées par CANNES IS UP, responsable du traitement. Elles sont analysées et transmises aux différents services concernés pour les nécessités de la gestion interne.</p>
                            <p>Elles peuvent donner lieu à l'exercice d’un droit d'accès et de rectification de vos données sur simple demande à l’adresse email : contact@cannesisup.com</p>
                            <p>Vous pouvez aussi exiger la suppression et la non utilisation de toutes vos données personnelles dans notre système d'information par l’envoi d’une demande à l’adresse email : contact@cannesisup.com</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Legal;