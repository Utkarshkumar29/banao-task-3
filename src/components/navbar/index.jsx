import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar=()=>{
  return (
        <Navbar bg="dark" variant="dark" expand="lg" className='p-2'>
            <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default MyNavbar
