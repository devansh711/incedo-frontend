import React,{Component} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




    export class Navbarr extends Component {

        render()
        {
            return(
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="/">Home</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">About</Nav.Link>
                     
                    </Nav>
                    <Nav>
                     
                      <NavDropdown title="Login" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/logininvs">Login as Invester</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/loginadv"> Login as Advisor</NavDropdown.Item>
                       
                      </NavDropdown>

                      <Nav.Link href="/signup">SignUp</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            )
        }
}