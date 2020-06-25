import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./frontoffice/navbar/Navbar";
import Footer from "./frontoffice/footer/Footer";
import Legal from "./frontoffice/legal/Legal";

import Home from "./frontoffice/home/Home";
import Annuaire from "./frontoffice/annuaire/Annuaire";
import Membre from "./frontoffice/membre/Membre";
import Adhesion from "./frontoffice/adhesion/Adhesion";
import Formulaire from "./frontoffice/register/Register";
import Dda from "./frontoffice/dda/Dda";
import Actualites from "./frontoffice/actualites/Actualites";
import Equipe from "./frontoffice/equipe/Equipe";
import Partenaires from "./frontoffice/partenaires/Partenaires";
import Contact from "./frontoffice/contact/Contact";

import Dashboard from "./backoffice/dashboard/Dashboard";
import Member from "./backoffice/member/Member";


import "./App.css"

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/annuaire" component={Annuaire} />
        <Route exact path="/annuaire/:id" component={Membre} />
        <Route exact path="/adherer" component={Adhesion} />
        <Route exact path="/adherer/formulaire" component={Formulaire} />
        <Route exact path="/dda" component={Dda} />
        <Route exact path="/actus" component={Actualites} />
        <Route exact path="/equipe" component={Equipe} />
        <Route exact path="/partenaires" component={Partenaires} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/mentions-legales" component={Legal} />
       
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/dashboard/:id" component={Member} />


      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
