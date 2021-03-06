import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Link to="/" className="navbar-brand">
            <img alt="logo" className="company-logo" src="./img/logo.png"></img>
          </Link>
          <Nav>
            <NavItem>
              <Link className="nav-link" to={'/expense'}>
                <i className="fas fa-cart-plus"></i>
                Expense
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={'/income'}>
                <i className="fas fa-dollar-sign"></i>
                Income
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={'/account-status'}>
                <i className="far fa-money-bill-alt"></i>
                Account status
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
