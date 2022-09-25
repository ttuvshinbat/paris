import React from 'react';
import homePic from "./main_logo.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Login() {
    var searchSvg = <svg width="19.2" height="19.2" viewBox="0 0 24 24" fill="" ><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path></svg>
    return (
        <Container fluid>
            <Navbar className='bg-white '  >

                <div className='col-6 row center '>
                    <div className=' col-5'>
                        <img src={homePic} alt="" />
                    </div>
                    <div className='black col-2'>
                        <Nav.Link href="#action3" className='mx-1'>nuur</Nav.Link>
                    </div   >
                    <div className='black col-3' >
                        <Nav.Link href="#action5" className='mx-1'>emchiin niitlel</Nav.Link>
                    </div>

                </div>
                <div className='col-6 me-4 pe-3'>  <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    {searchSvg}
                    <Form className="d-flex">

                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">nevtreh</Button>
                        <Button variant="outline-success">burtguuleh</Button>
                    </Form>
                </Navbar.Collapse>
                </div>


            </Navbar>
        </Container>



    )

}
export default Login