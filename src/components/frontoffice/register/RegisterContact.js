import React, { Component } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import ReactQuill from 'react-quill'

class RegisterContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorHtml: '',
            file: '',
            imagePreviewUrl: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        return (
            <Container className="contact">
                <h1 className="titleGrey  mt-5 mb-3">Représentant</h1>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Nom</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }}name="contactLastname" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Prénom</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="contactFirstname"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" style={{ height: "2rem !important" }} >
                    <Form.Label column sm="4">Fonction</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="contactFunction"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0"  style={{ minHeight: "6rem" }}>
                    <Form.Label column sm="4">Citation</Form.Label>
                    <Col sm={8}>
                        <ReactQuill theme="bubble" style={{ height: "100%", backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} onChange={this.handleChange} value={this.state.editorHtml} modules={{ toolbar: false }} name="contactQuote"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-1 p-0" >
                    <Form.Label column sm="4">Portrait</Form.Label>
                    <Col sm={8} className="my-auto">
                        <Form.Control type="file" style={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #f7316b" }} name="contactAvatar"/>
                    </Col>
                </Form.Group>
            </Container>
        );
    }
}

export default RegisterContact;