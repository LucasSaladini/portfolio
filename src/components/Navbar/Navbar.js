import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark"  expand="lg">
          <Navbar.Brand href="/" className={styles.brand}>Lucas Saladini</Navbar.Brand>
          <Navbar.Toggle className={styles.hamburger} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
              <Nav.Link href="/portfolio" className={styles.link}>Portfólio</Nav.Link>
              <Nav.Link href="/contact" className={styles.link}>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;