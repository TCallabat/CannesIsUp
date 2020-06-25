
import React, { Component } from 'react';
import { Container, Badge, Card, Col, Row, Table, Button, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            display: false,
        };
    };

    componentDidMount() {
        fetch("http://localhost:8080/admin/dashboard", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "bearer " + localStorage.getItem("token") },
            mode: "cors",
            body: JSON.stringify({ userId: localStorage.getItem("userId"), userType: localStorage.getItem("userType") })
        })
            .then((response) => response.json())
            .then(
                (data) => this.setState({ data }),
                (error) => console.log(error)
            );
    };

    changeStatus = (e, id) => {
        fetch("http://localhost:8080/admin/status", {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": "bearer " + localStorage.getItem("token") },
            mode: "cors",
            body: JSON.stringify({ userId: localStorage.getItem("userId"), userType: localStorage.getItem("userType"), id: id, status: e.target.value })
        })
            .then((response) => response.json())
            .then(
                (data) => this.setState(data),
                (error) => console.log(error)
            );
    };

    changeType = (e, id) => {
        fetch("http://localhost:8080/admin/type", {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": "bearer " + localStorage.getItem("token") },
            mode: "cors",
            body: JSON.stringify({ userId: localStorage.getItem("userId"), userType: localStorage.getItem("userType"), id: id, type: e.target.checked })
        })
            .then((response) => response.json())
            .then((type) => {
                const data = this.state.data;
                this.state.data.forEach((data, index) => {
                    if (this.state.data._id === id) {
                        data[index].type = e.target.checked;
                    }
                });
                this.setState(data)
            },
                (error) => console.log(error)
            );
    };

    sortDataA = (e) => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a[e.target.parentNode.id].toUpperCase() < b[e.target.parentNode.id].toUpperCase()) {
                return -1
            } else if (a[e.target.parentNode.id].toUpperCase() > b[e.target.parentNode.id].toUpperCase()) {
                return 1
            };
            return 0;
        });
        this.setState({ data: sort })
    };

    sortDataZ = (e) => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a[e.target.parentNode.id].toUpperCase() > b[e.target.parentNode.id].toUpperCase()) {
                return -1
            } else if (a[e.target.parentNode.id].toUpperCase() < b[e.target.parentNode.id].toUpperCase()) {
                return 1
            };
            return 0;
        });

        this.setState({ data: sort })
    };

    sortData1 = (e) => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a[e.target.parentNode.id] < b[e.target.parentNode.id]) {
                return -1
            } else if (a[e.target.parentNode.id] > b[e.target.parentNode.id]) {
                return 1
            };
            return 0;
        });

        this.setState({ data: sort })
    };

    sortData9 = (e) => {
        let sort = [...this.state.data].sort(function (a, b) {
            if (a[e.target.parentNode.id] > b[e.target.parentNode.id]) {
                return -1
            } else if (a[e.target.parentNode.id] < b[e.target.parentNode.id]) {
                return 1
            };
            return 0;
        });
        this.setState({ data: sort })
    };

    render() {
        return (
            <Container fluid className="">
                <Row>
                    <Col>
                        <Table bordered hover>
                            <thead>
                                <tr className="bg-dark text-white">
                                    <th className="m-0 p-1 text-center text-capitalize align-middle">Avatar</th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="contactFirstname">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Prénom</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="contactLastname">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Nom</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="companyName">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Société</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="companyCity">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Ville</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="companyEmail">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Email</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="companyPhone">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Téléphone</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="status">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Status membre</span>
                                    </th>

                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="paymentType">
                                        <i className="pr-1 fas fa-arrow-up" onClick={(e) => this.sortData1(e)}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={(e) => this.sortData9(e)}></i>
                                        <br />
                                        <span>Paiement</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="createdDate">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortDataA}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortDataZ}></i>
                                        <br />
                                        <span>Date enregistrement</span>
                                    </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle" id="type">
                                        <i className="pr-1 fas fa-arrow-up" onClick={this.sortData1}></i>
                                        <i className="pl-1 fas fa-arrow-down" onClick={this.sortData9}></i>
                                        <br />
                                        <span>Type</span>
                                        </th>
                                    <th className="m-0 p-1 text-center text-capitalize align-middle">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {this.state.data.map((data, index) => {
                                    return (
                                        <tr key={index} >
                                            <td className="text-center">
                                                <Image roundedCircle src={data.contactAvatar} alt="avatar" style={{ height: 75 }} />
                                            </td>
                                            <td className="m-0 p-1 text-left align-middle text-capitalize">{data.contactFirstname}</td>
                                            <td className="m-0 p-1 text-left align-middle text-uppercase">{data.contactLastname}</td>
                                            <td className="m-0 p-1 text-left align-middle text-uppercase">{data.companyName}</td>
                                            <td className="m-0 p-1 text-left align-middle text-capitalize">{data.companyCity}</td>
                                            <td className="m-0 p-1 text-left align-middle text-lowercase">{data.companyEmail}</td>
                                            <td className="m-0 p-1 text-left align-middle">{data.companyPhone}</td>
                                            <td className="m-0 p-1 text-left align-middle text-capitalize">{data.status}</td>
                                            <td className="m-0 p-1 text-center align-middle">
                                                {data.paymentType == "1"
                                                    ? <i className="far fa-3x fa-credit-card"></i>
                                                    : <i className="fas fa-3x fa-exchange-alt"></i>
                                                }
                                            </td>
                                            <td className="m-0 p-1 text-center align-middle">
                                                {moment(data.createdDate).locale("fr").format("DD/MM/YYYY")}
                                            </td>
                                            <td className="m-0 p-1 text-center align-middle">
                                                {data.type == true
                                                    ? <i className="fas fa-3x fa-user-shield text-primary"></i>
                                                    : <i className="fas fa-3x fa-user"></i>
                                                }
                                            </td>
                                            <td className="m-0 px-2 py-0 text-center align-middle">
                                                <Link to={`/admin/dashboard/${data._id}`}>
                                                    <Button className="mx-auto mb-1 p-1 text-center text-uppercase font-weight-bold w-100" variant="warning">Modifier</Button>
                                                </Link>
                                                <br />
                                                <Button className="mx-auto mt-1 p-1 text-center text-uppercase font-weight-bold w-100" variant="danger">Supprimer</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Dashboard;