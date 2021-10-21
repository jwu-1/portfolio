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
                                <img src="gametrak.PNG" className="port" alt="gametrak" />
                                <div className="details">
                                    <h3>Gametrak</h3>
                                    <h4>Description:</h4> 
                                    Helps you create the game that you desire
                                    by keeping track of the different features of your games
                                    like characters, skills and attributes!
                                    <h4>My Role:</h4> Project Owner, Front-End Designer, Back-End Developer
                                    <a  href="https://gametrak-mern.herokuapp.com/" target="_blank">Link To Site</a>
                                    <a  href="https://github.com/jwu-1/mern-course-capstone-jwu-1.git" target="_blank">Link To Repo</a>
                                </div>
                            </div>
                            <div className="port-box">
                                <img src="tic-tac-toe.png" className="port" alt="tictactoe" />
                                <div className="details">
                                    <h3>Tic Tac Toe</h3>
                                    <h4>Description:</h4> 
                                    Play a game of tic tac toe with your friends or face off against
                                    a responsive computer who will try to win!
                                    <h4>My Role:</h4> Sole Developer(JS, CSS, HTML)
                                    <a  href="https://github.com/jwu-1/challenge-tictactoe-jwu-1.git" target="_blank">Link To Repo</a>
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