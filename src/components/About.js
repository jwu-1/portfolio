import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

function About(props) {
    return (
        <React.Fragment >
            <Container className="body-container" fluid="true" >
                <Col className="content-body">
                    <Row className="row-content">
                        <h1 className="body-heading">About</h1>
                        <p>
                            I was born and raised in Michigan. Ever since
                            I was a kid, I always was fascinated by the
                            computer world. During my teens, I started some video game projects
                            and modded some video games which gave me my first taste in programming.
                            During my early years in college,
                            I did not necessarily have the patience and discipline
                            needed to be a software developer but after a few years
                            working in other fields like enlisting in the U.S. Army
                            and a mortgage company, I have decided that this was the
                            only path that I found myself truly excelling in. 
                        </p>

                    </Row>

                </Col>
            </Container>

        </React.Fragment>
    )

}

export default About;