import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {logout} from "../actions/userActions";


const Header = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state =>state.userLogin );
    const {userInfo}  = userLogin;

    const logoutHandler = () =>{
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        </LinkContainer>
                        {userInfo ?
                            (<NavDropdown id='username' title={userInfo.name}>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
                            </NavDropdown>)
                            :
                            ( <LinkContainer to='/login'>
                                <Nav.Link ><i className='fas fa-user'></i>Sing In</Nav.Link>
                            </LinkContainer>)}
                        {userInfo && userInfo.isAdmin && (
                            (<NavDropdown id='adminmenu' title='Admin'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Admin</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderslist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>)
                        )}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </header>  
    ) 
}

export default Header
