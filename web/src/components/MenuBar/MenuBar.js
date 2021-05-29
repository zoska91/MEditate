import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import style from './MenuBar.module.scss';
import logo from '../../assets/img/logo-meditate.png';

const MenuBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' fixed='top' className={style.menu}>
      <Navbar.Brand>
      <img
        src={logo}
        className={style.logo}
        alt='MEditate logo'
        with='60'
        height='60'
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className={style.menuLink} href='/home'>Moje Medytacje</Nav.Link>
          <Nav.Link className={style.menuLink} href='#memes'>Jak to działa?</Nav.Link>
          <Nav.Link className={style.menuLink} href='#memes'>Recenzje</Nav.Link>
          <Nav.Link className={style.menuLink} href='#memes'>Premium+</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <div className={style.wrapper}>
    //   <div className={style.container}>
    //     <MenuBarItem name='Strona Główna'></MenuBarItem>
    //     <MenuBarItem name='Jak to działa?'></MenuBarItem>
    //     <MenuBarItem name='Recenzje'></MenuBarItem>
    //     <MenuBarItem name='Premium+'></MenuBarItem>
    //   </div>
    // </div>
  );
};

export default MenuBar;
