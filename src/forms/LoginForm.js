import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import agent from '../agent';

import { LOGIN } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) })
});

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Requerido';
  }

  if (!values.password) {
    errors.password = 'Requerido';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <input {...input} type={type} className="form-control" />
    {touched && (error && <span>{error}</span>)}
  </FormGroup>
);

let LoginForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="username"
      type="email"
      component={renderField}
      label="Username" />

    <Field
      name="password"
      type="password"
      component={renderField}
      label="Password" />

    <Button type="submit" className="btn-login float-right">Log In</Button>
  </Form>
);


LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
