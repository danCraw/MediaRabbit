import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import { LinkContainer } from 'react-router-bootstrap';
import './HeaderStyle.css';

export const Header = () => { 
  return (
      <header className='header'>
         <div className='header__container'>
             <Navbar className='navBar' collapseOnSelect expand="lg" >
                 <Navbar.Brand href="/" className='logo'><span className='logo__span'>Media</span>rabbit</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse  className="justify-content-end">
                     <Nav className='nav__links'>
                         <NavDropdown title="Услуги" className='header__link' id="navbarScrollingDropdown">
                             <LinkContainer to="/develop">
                                 <NavDropdown.Item href="#action3" className='header__link dropDown'>разработка сайтов</NavDropdown.Item>
                             </LinkContainer>
                             <LinkContainer to="/bot">
                                 <NavDropdown.Item href="#action4" className='header__link dropDown'>разработка телеграм бота</NavDropdown.Item>
                             </LinkContainer>
                             {/* <LinkContainer to="/design">
                                 <NavDropdown.Item href="#action3" className='header__link dropDown'>дизайн</NavDropdown.Item>
                             </LinkContainer> */}
                             {/* <LinkContainer to="/post">
                                 <NavDropdown.Item href="#action4" className='header__link dropDown'>постпродкшн</NavDropdown.Item>
                             </LinkContainer> */}
                         </NavDropdown>

                         <LinkContainer to="/contacts">
                             <Nav.Link className='header__link'>Контакты</Nav.Link>
                         </LinkContainer>
                         {/* <LinkContainer to="/about">
                             <Nav.Link href=""className='header__link'>О нас</Nav.Link>
                         </LinkContainer> */}
                     </Nav>
                     <Nav>
                         <HeaderButton/>
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
         </div>
      </header>

  )
}
