import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header'
import Body from './components/Body'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (

    <Router>
      <Header />
      <Switch>
      <Route path="/contacts" >
          <Contact />
        </Route>
      <Route path="/about" >
          <About />
        </Route>
      <Route path="/portfolio" >
          <Portfolio />
        </Route>
      <Route path="/resume" >
          <Resume />
        </Route>
        <Route path="/" >
          <Body />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
