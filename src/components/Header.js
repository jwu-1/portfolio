import React, { useEffect, useState } from "react";
import { Button, Col, Container, Navbar, Nav, Row } from "react-bootstrap";
function Header(props) {

    function expandedWin() {
        return (
            <Nav >
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contacts">Contact</Nav.Link>
                </Nav.Item></Nav>
        )
    }
    function colWin(){
        return(
            <div></div>
        )
    }
    return (
        <React.Fragment >
            <Navbar bg="dark" variant="dark" id="nav-bar" sticky="top" >
                <Nav.Link href="/"><img src="jmw.png" id="nav-img" /></Nav.Link>
                <Nav.Link id="nav-title" href="/"><div>Justin Wu</div></Nav.Link>
                {expandedWin()}
            </Navbar>
        </React.Fragment>
    )

}

export default Header;