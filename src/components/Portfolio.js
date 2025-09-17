import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

function Portfolio(props) {
    return (
        <React.Fragment >
            <Container className="body-container" fluid="true" >
                <Col className="content-body">
                    <Row className="row-content">
                        <h1 className="body-heading">Portfolio</h1>
                        <div id="ports">
                        <div className="port-box">
                                
                                <img src="ciphercom-1.ico" className="port" alt="ciphercom-1" />
                                <div className="details">
                                    <h3>Ciphercom-1</h3>
                                    <h4>Description:</h4> 
                                    Allows users to generate One Time Pads, the uncrackable method of sending encrypted messages to others offline. The user is allowed to choose which characters to use
                                    while making the one time pad and there are tools to help decipher or encrypt messages involving simplistic mathematics. Accessible for both desktops and phones!
                                    <h4>My Role:</h4> Sole Developer (React)
                                    <a  href="https://ciphercom-1.vercel.app/" target="_blank">Link To Site</a>
                                    <a  href="https://github.com/jwu-1/ciphercom-1" target="_blank">Link To Repo</a>
                                </div>
                            </div>
                            <div className="port-box">
                                
                                <img src="gametrak.PNG" className="port" alt="gametrak" />
                                <div className="details">
                                    <h3>Gametrak</h3>
                                    <h4>Description:</h4> 
                                    Helps you create the game that you desire
                                    by keeping track of the different features of your games
                                    like characters, skills and attributes!
                                    <h4>My Role:</h4> Project Owner, Front-End Designer, Back-End Developer
                                    <a  href="https://github.com/jwu-1/mern-course-capstone-jwu-1.git" target="_blank">Link To Repo</a>
                                </div>
                            </div>
                            <div className="port-box">
                                <img src="snippets.PNG" className="port" alt="snippets" />
                                <div className="details">
                                    <h3>Snippets</h3>
                                    <h4>Description:</h4> 
                                    A social media website where users can register and post different things.
                                    <h4>My Role:</h4>Front-End Features(Avatar Select, Change Avatar) Backend Features(Deletion of Posts, Multer Image Upload)
                                    <a  href="https://github.com/jwu-1/snippets-app-jwu-1" target="_blank">Link To Repo</a>
                                </div>
                            </div>
                            <div className="port-box">
                                <img src="ntw.png" className="port" alt="number-to-words" />
                                <div className="details">
                                    <h3>Number- Word Converter</h3>
                                    <h4>Description:</h4> 
                                    An app that converts inputted numbers to the proper wording if you were to say the numbers out loud.
                                    <h4>My Role:</h4> Sole Developer(JS, CSS, HTML)
                                    <a  href="https://github.com/jwu-1/challenge-convert-numbers-to-words-jwu-1.git" target="_blank">Link To Repo</a>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Col>
            </Container>

        </React.Fragment>
    )

}

export default Portfolio;