import './navbar.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ToriinDalbaa from './ToriinDalbaa';



function MyNavbar() {
    const [mongol, setMongol] = useState(false);


    console.log(ToriinDalbaa)
    console.log(mongol)
    return (
        <Navbar className='navbar' expand="lg">
            <Container fluid>
                <div className='d-flex justify-content-end ms-3'>
                    <Nav.Link href="#action1" className='mx-1'>emch</Nav.Link>
                    <Nav.Link href="#action1" className='mx-1'>baiguulga</Nav.Link>
                    <Nav.Link href="#action2" className='mx-1'>shinjilgeenii hariu</Nav.Link>
                </div>
                <div className='d-flex justify-content-end me-3' >
                    <Nav.Link href="#action1" className='mx-1 fs-6 d-flex justify-content-end' onClick={() => { setMongol(!mongol) }} >hel songoh <ToriinDalbaa type={mongol} />   </Nav.Link>
                    <Nav.Link href="#action1" className='mx-1'>bidnii tuhai</Nav.Link>
                    <Nav.Link href="#action2" className='mx-1'>nuutslaliin bodlogo</Nav.Link>
                </div>

                <Navbar.Toggle aria-controls="navbarScroll" />

            </Container>
        </Navbar>
    );


}
export default MyNavbar