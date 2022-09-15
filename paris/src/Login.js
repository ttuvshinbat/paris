import React from 'react';
import homePic from "./main_logo.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Login() {
    return (
        <Navbar className='navbar' expand="lg">
            <Container fluid>
                <div className='d-flex justify-content-between '> <img src={homePic} alt="" />
                    <div className='d-flex justify-content-between '>
                        <Nav.Link href="#action1" className='mx-1'>emch</Nav.Link>
                        <Nav.Link href="#action1" className='mx-1'>baiguulga</Nav.Link>
                        <Nav.Link href="#action2" className='mx-1'>shinjilgeenii hariu</Nav.Link>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>


                </div>
            </Container>
        </Navbar>



    )

}
export default Login