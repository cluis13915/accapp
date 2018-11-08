import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Expense from './components/Expense';
import Income from './components/Income';
import AccountStatus from './components/AccountStatus';

import './App.css';

const mapStateToProps = state => {
  return {
    appName: state.common.appName
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header appName={this.props.appName}></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/expense" component={Expense}></Route>
          <Route exact path="/income" component={Income}></Route>
          <Route exact path="/account-status" component={AccountStatus}></Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  appName: PropTypes.string
};

export default connect(mapStateToProps, () => ({}))(App);
