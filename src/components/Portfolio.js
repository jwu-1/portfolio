import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

function Portfolio(props) {
    return (
        <React.Fragment >
            <Container className="body-container" fluid="true" >
                <Col className="content-body">
                    <Row className="row-content">
                        <h1 className = "body-heading">Portfolio</h1>
                        <p>Portfolios n stuff</p>
                            
                    </Row>
                    <Row className="row-content">
                        <h1 className = "body-heading">What I Use:</h1>
                    </Row>
                </Col>
            </Container>

        </React.Fragment>
    )

}

export default Portfolio;