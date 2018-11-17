import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Expense from './components/Expense';
import Income from './components/Income';
import AccountStatus from './components/AccountStatus';


import './App.css';

const mapStateToProps = state => {
  return {
    currentUser: state.common.currentUser
  }
};

class App extends Component {
  render() {
    if (!this.props.currentUser) {
      return (
        <div className="login-container">
          <Route exact path="/*" component={Login}></Route>
        </div>
      );
    }

    return (
      <div className="app">
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/expense" component={Expense}></Route>
          <Route exact path="/income" component={Income}></Route>
          <Route exact path="/account-status" component={AccountStatus}></Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

export default connect(mapStateToProps, () => ({}))(App);
