import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

const Login = props => {
  return (
    <div>
      <h1>Login please</h1>
      <div>
        <label>Username:</label>
        <input type="email"></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password"></input>
      </div>

      <button><Link to={'/'}>Back</Link></button>
      <button type="submit">Log In</button>
    </div>
  )
};

const Home = props => {
  return (
    <div>
      <h1>This is the home page!</h1>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <Link to={'/login'}>Log In</Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
