import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

function Contact(props) {
    return (
        <React.Fragment >
            <Container className="body-container" fluid="true" >
                <Col className="content-body">
                    <Row className="row-content">
                        <h1 className="body-heading"><a href href = "mailto: jwu1@tutanota.com">Email</a></h1>
                    </Row>
                    <Row className="row-content">
                        <h1 className="body-heading"><a href="https://github.com/jwu-1" target="_blank">Git</a></h1>
                    </Row>
                    <Row className="row-content">
                        <h1 className="body-heading"><a href="https://www.linkedin.com/in/justin-wu-3543351a1/" target="_blank">Linkedlin</a></h1>
                
                    </Row>
                </Col>
            </Container>

        </React.Fragment>
    )

}

export default Contact;