import React from 'react';
import { Jumbotron } from 'reactstrap';

class Expense extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3>Record an expense</h3>
        </Jumbotron>
      </div>
    );
  }
}

export default Expense;
