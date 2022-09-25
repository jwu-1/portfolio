import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Resume(props) {
    return (
        <React.Fragment >
            <Container className="body-container" fluid="true" >
                <Col className="content-body">
                    <Row className="row-content">
                        <h1 className="body-heading">Resume</h1>
                        <a className = "link" href="resume.pdf"download="JustinWuResume">Download the Resume PDF Here</a>
                    </Row>
                    <Row className="row-content">
                        <h2 className="body-heading">Summary</h2>
                        <p>Full-Stack Software Engineer and US Army Veteran</p>
                    </Row>
                    <Row className="row-content">
                        <h2 className="body-heading">Education</h2>
                        <span className="resume-box" >
                            <img src="kenzie.png" className="resume-item" alt="Kenzie Academy Logo" />
                            <img src="snhu.png" className="resume-item" alt="SNHU Logo" />
                        </span>
                        <h4>Kenzie Academy at Southern New Hampshire University</h4>
                        <p>Software Engineering Program 2021</p>
                        <span className="resume-box" >
                            <img src="ou.png" className="resume-item" alt="Kenzie Academy Logo" />
                        </span>
                        <h4>Oakland University</h4>
                        <p>Bachelor of Arts 2019</p>
                    </Row>
                    <Row className="row-content">
                        <h2 className="body-heading">Past Experiences</h2>
                        <p>Purpose Financial - Front End Engineer 2022</p>
                        <p>United Wholesale Mortgage - Underwriter 2020</p>
                        <p>U.S. Army - Civil Affairs Specialist 2013</p>
                    </Row>


                </Col>
            </Container>

        </React.Fragment>
    )

}

export default Resume;