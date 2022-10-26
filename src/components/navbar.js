import {Button, Container, Navbar, Modal} from 'react-bootstrap';

const NavbarContainer = () =>  {
  return (
    <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
            <Button>Cart 0 Items</Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default  NavbarContainer
