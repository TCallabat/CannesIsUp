import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="m-0 p-0 navbar navbar-fixed-top">
                    <div className="container">
                        <img src="./logo.png" alt="logo Cannes Is Up" />
                        <ul className="nav navbar-nav">
                            <li><Link to={"/"}>accueil</Link></li>
                            <li><Link to={"/annuaire"}>annuaire</Link></li>
                            <li><Link to={"/adherer"}>devenez adhérent</Link></li>
                            <li><Link to={"/dda"}>DDA îles de Lerins</Link></li>
                            <li><Link to={"/actus"}>actualités</Link></li>
                            <li><Link to={"/equipe"}>l'équipe</Link></li>
                            <li><Link to={"/partenaires"}>partenaires</Link></li>
                            <li><Link to={"/contact"}>contact</Link></li>
                            <li><Link to={"/admin/dashboard"}><i class="far fa-user-circle"></i></Link></li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;