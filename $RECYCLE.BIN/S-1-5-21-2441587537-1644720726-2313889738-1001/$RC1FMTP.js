import React from 'react';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "mush",
      lastName: "shaikh",
      email: "admin@123"
    };
  }

  updateEmployee = () => {
    this.setState({
      firstName: "mushfeka",
      lastName: "leswala",
      email: "mush@123"
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <button onClick={this.updateEmployee}>Update Employee</button>
      </div>
    );
  }
}

export default Employee;
