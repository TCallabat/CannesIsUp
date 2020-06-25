import React, { Component } from 'react';
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import ReactQuill from 'react-quill'

class RegisterCompany extends Component {
    constructor(props) {
        super(props)
        this.state = { editorHtml: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    render() {
        return (
            <Container className="company">
                <h1 className="titleGrey mt-5 mb-3">Société</h1>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }}>
                    <Form.Label column sm="4">Nom de la société *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyName" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Adresse *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyAddress" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Complément d'adresse</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyAddressComp" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Code postal *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyZip" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Ville *</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyCity" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Téléphone</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyPhone" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">E-mail</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyEmail" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Site Internet</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyUrl" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Secteur d'activité</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyActivity" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ minHeight: "10rem" }}>
                    <Form.Label column sm="4">Description</Form.Label>
                    <Col sm={8}>
                        <ReactQuill theme="bubble" style={{ height: "100%", backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} onChange={this.handleChange} value={this.state.editorHtml} formats={RegisterCompany.formats} modules={RegisterCompany.modules} name="companyDescriptionEditor" />
                    </Col>
                    <input type="hidden" name="companyDescription" value={this.state.editorHtml} />
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Logo de la société</Form.Label>
                    <Col sm={8} className="my-auto">
                        <Form.Control type="file" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyLogo" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Photo de couverture</Form.Label>
                    <Col sm={8} className="my-auto">
                        <Form.Control type="file" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyBanner" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Dossier de présentation</Form.Label>
                    <Col sm={8} className="my-auto">
                        <Form.Control type="file" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="companyPresentation" />
                    </Col>
                </Form.Group>
            </Container >
        );
    }
}

RegisterCompany.formats = ['bold', 'italic', 'underline', 'list', 'bullet', 'indent']
RegisterCompany.modules = { toolbar: [['bold', 'italic', 'underline'], [{ 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['clean']] }

export default RegisterCompany;