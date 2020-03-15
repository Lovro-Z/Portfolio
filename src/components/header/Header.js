import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import './header.css';

class Header extends Component{
    render() {
        return (
            <Navbar className="my-navbar" variant="dark">
                <Navbar.Brand className="mr-auto" href="/">Welcome!</Navbar.Brand>
                <Nav variant="pills">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/data">Data</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
