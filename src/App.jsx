import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/shared/NavBar";
import Personas from "./components/pages/Personas";
import Cambios from "./components/pages/Cambios";
import Contacto from "./components/pages/Contacto.jsx";
import Home from "./components/pages/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Personas} path="personas" />
        <Route component={Cambios} path="/cambios" />
        <Route component={Contacto} path="/contacto" />
        <Route exact component={Home} path="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
