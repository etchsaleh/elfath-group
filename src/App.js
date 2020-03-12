import React, { Component } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Navbars from './components/Navbars';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import BusinessAreas from './pages/BusinessAreas';
import CSR from './pages/CSR';
import Contact from './pages/Contact';

export default class App extends Component {

  render() {
    return (
      <>
      <Router>
        <div style={{padding:0}}>
          <div style={{top: 0, left: 0, right: 0, position: 'fixed', zIndex: 400}}>
              <Navbars />
              <Sidebar />
          </div>
          <div style={{paddingTop: "0", left: 0, right: 0}}>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/our-company">
                  <OurCompany />
                </Route>
                <Route exact path="/business-areas">
                  <BusinessAreas />
                </Route>
                <Route exact path="/csr">
                  <CSR />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
            </AnimatedSwitch>
          </div>
        </div>
      </Router>
      </>
    );
  }
}