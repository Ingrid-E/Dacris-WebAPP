import React from "react";
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../Assets/logoE.png'
import { Search } from 'react-bootstrap-icons';

function NavBar() {
    return (
        <Navbar className= "font" fixed="top" style={{ backgroundColor: "white", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.2)" }} expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><img src={logo} style={{ width: "50px"}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav 
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' , color:"black"}}
                        navbarScroll
                    >
                        <Nav.Link style={{marginRight: '30px'}} href="#inicio">INICIO</Nav.Link>
                        <Nav.Link style={{marginRight: '30px'}} href="#aboutus">NOSOTROS</Nav.Link>
                        <NavDropdown style={{marginRight: '30px'}} title="CATALOGO" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#mujer">MUJER</NavDropdown.Item>
                            <NavDropdown.Item href="#hombre">HOMBRE</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#descuentos">
                                DESCUENTOS
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{marginRight: '30px'}}  href="#puntos">PUNTOS DE VENTA</Nav.Link>
                        <Nav.Link style={{marginRight: '30px'}}  href="#promociones" >PROMOCIONES</Nav.Link>
                        <Nav.Link href="#buscar"><Search/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;