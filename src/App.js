import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Header from './components/Header';

import './App.css';

const Login = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" placeholder="password" />
      </FormGroup>
      <Link to={'/'}>
        <Button>Back</Button>
      </Link>
      <Button color="success">Log In</Button>
    </Form>
  )
};

const Home = props => {
  return (
    <div>
      <h1>This is the home page!</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header appName="Accapp"></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
