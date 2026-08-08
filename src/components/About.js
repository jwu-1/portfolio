import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

function About(props) {
  return (
    <React.Fragment>
      <Container className="body-container" fluid="true">
        <Col className="content-body">
          <Row className="row-content">
            <h1 className="body-heading">About</h1>
            <p>
              I was born and raised in Michigan. I’ve been interested in
              computers and technology since I was a kid, and that curiosity
              eventually led me into programming through video game projects and
              modding in my teens. After spending time in other fields —
              including serving in the U.S. Army and working in the mortgage
              industry — I returned to software development and committed to it
              fully. Over the past several years I’ve worked as a
              frontend-focused software engineer, building and maintaining web
              applications with React and Vue, collaborating in Agile teams, and
              independently developing full projects from start to finish. I’m
              especially motivated by creating clean, usable interfaces and
              continuing to grow as a developer.
            </p>
          </Row>
        </Col>
      </Container>
    </React.Fragment>
  );
}

export default About;
