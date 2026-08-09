import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
function Body() {

  return (
    <React.Fragment>
      <Container className="body-container" fluid="true">
        <Col className="content-body">
          <Row className="row-content">
            <h1 className="body-heading">Welcome</h1>
            <p>
              My name is Justin and I am a full-stack software developer from
              Troy, Michigan who's dedicated to providing the best quality
              applications possible.
            </p>
          </Row>
          <Row className="row-content">
            <h1 className="body-heading">What I Use:</h1>
            <div id="items">
              <span className="item-box">
                <img src="html.png" className="item" alt="Html Logo" />
                HTML
              </span>
              <span className="item-box">
                <img src="js.png" className="item" alt="Javascript Logo" />
                Javascript
              </span>
              <span className="item-box">
                <img src="css.png" className="item" alt="CSS Logo" />
                CSS
              </span>
              <span className="item-box">
                <img src="react.png" className="item" alt="React.js Logo" />
                React.js
              </span>
              <span className="item-box">
                <img src="vue.webp" className="item" alt="Vue.js Logo" />
                Vue.js
              </span>
              <span className="item-box">
                <img
                  id="nuxt-icon"
                  src="nuxt.webp"
                  className="item"
                  alt="Nuxt.js Logo"
                />
                Nuxt.js
              </span>
              <span className="item-box">
                <img
                  src="expressjs.png"
                  className="item"
                  alt="Express.js Logo"
                />
                Express.js
              </span>
              <span className="item-box">
                <img src="mongodb.png" className="item" alt="Mongodb Logo" />
                MongoDB
              </span>
              <span className="item-box">
                <img src="nodejs.png" className="item" alt="Node.js Logo" />
                Node.js
              </span>
            </div>
          </Row>
        </Col>
      </Container>
    </React.Fragment>
  );
}

export default Body;
