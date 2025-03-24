import React from "react";
import ReactGA from "react-ga4";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Team from "./Team";
import Navbar from "./Navbar";

ReactGA.initialize("G-EBVX1D97GY");
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <footer className="text-center text-muted py-4 border-top mt-5 small">
        <div>Celebron IT Solutions B.V.</div>
        <div>KvK: 96373644 | BTW: NL867583393B01</div>
        <div
          onClick={() => window.location.href = 'mailto:contact@celebronitsolutions.com'}
          style={{ 'text-decoration': 'underline', cursor: 'pointer' }}
        >
          contact@celebronitsolutions.com
        </div>
      </footer>
    </>
  );
}

export default App;
