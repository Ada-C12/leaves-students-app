import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: ''
    }
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      name: this.state.fullName,
      email: this.state.email,
      present: false
    }

    this.setState({
      fullName: '',
      email: ''
    });

    this.props.addStudentCallback(newStudent)

  }

  render () {
    return (
      <form className="new-student-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            name="fullName"
            value={this.state.fullName}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.onFieldChange}
          />
        </div>
        <input
          type="submit"
          value="Add Student"
        />
      </form>
    );
  }
}

export default NewStudentForm;