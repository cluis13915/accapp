import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Link to="/" className="navbar-brand">
            <img className="company-logo" src="./img/logo.png"></img>
          </Link>
          <Nav>
            <NavItem>
              <Link className="nav-link" to={'/'}>
                <i class="fas fa-cart-plus"></i>
                Gasto
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={'/'}>
                <i class="fas fa-dollar-sign"></i>
                Ingreso
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={'/'}>
                <i class="far fa-money-bill-alt"></i>
                Estado de cuenta
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
