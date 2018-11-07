import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  render() {
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
    );
  }
}

export default Login;
