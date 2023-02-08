import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home'
const MainMenu = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Product</Nav.Link>
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
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
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
          <Nav>
            <Nav.Link href="/">
              <a href="" className='btn btn-outline-dark'>
                <i className='fa fa-sign-in me-1'></i>Login  
              </a>
            </Nav.Link>
            <Nav.Link href="/">
              <a href="" className='btn btn-outline-dark'>
                <i className='fa fa-user-plus me-1'></i>Register  
              </a>
            </Nav.Link>
            <Nav.Link href="/">
              <a href="" className='btn btn-outline-dark'>
                <i className='fa fa-shopping-cart me-1'></i>Cart(0)  
              </a>
            </Nav.Link>
          </Nav>    
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Home/>
    </>
  )
}

export default MainMenu
