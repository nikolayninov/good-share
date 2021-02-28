import React from 'react';
import { Form, Button, Navbar, FormControl, Image, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = ({ currentUser, handleLogout }) => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="align-top sticky-nav ">
            <Navbar.Brand >
                <Image src="/logo.png" width="50" height="50" className="d-inline-block align-top" rounded />
            </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                <Button variant="outline-secondary">Search</Button>
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="navbar-element">Home</Nav.Link>
                    <Nav.Link href="/market" className="navbar-element">Market</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <NavDropdown title={
                <Image src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2014/12/raccoon.jpg" width="50" height="50" className="d-inline-block " rounded />
            } className="caret">
                <NavDropdown.Item>
                    <Link to="/profile" >Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Your offers</NavDropdown.Item>
                <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">

                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        </Navbar >
    );
};

export default NavigationBar;
