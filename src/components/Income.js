import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const mapStateToProps = (state ) => {
  const defaultState = {
    date: moment()
  };

  return {
    ...defaultState,
    ...state
  }
};

class Income extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = this.state || {};
    this.state.date = this.props.date;
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h3>Record an income</h3>
        </Jumbotron>

        <div className="container">
          <Form>
            <div className="row">
              <div className="col-sm-7">
                <Link to={'/'}>
                  <Button>
                    <i className="fas fa-arrow-left"></i>
                    Back
                  </Button>
                </Link>
              </div>
              <div className="col-sm-5">
                <FormGroup row>
                  <Label for="date" sm={2}>Date</Label>
                  <div className="col-sm-10">
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.handleDateChange}
                      className="form-control" />
                  </div>
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Source">
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Add income details"
                rows="4">
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="amount">Amount</Label>
              <Input
                type="number"
                name="amount"
                placeholder="How much?"></Input>
            </FormGroup>
            <FormGroup className="text-center">
              <Button color="info">
                <i className="far fa-save"></i>
                Save
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

Income.propTypes = {
  date: PropTypes.object
};

export default connect(mapStateToProps, () => ({}))(Income);
