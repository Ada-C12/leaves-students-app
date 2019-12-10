import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: ''
    }
    this.validators = {
      fullName: /.+/,
      email: /.+@.+\..+/,
    };
  }

  validate = (fieldName) => {
    const value = this.state[fieldName];
    const validation = this.validators[fieldName];

    if (value.match(validation)) {
      return true;
    }

    return false;

  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    let allValid = true;

    Object.keys(this.validators).forEach((key) => {
      if (!this.state[key].match(this.validators[key])) {
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }


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
    const emailValid = this.validate('email');
    const fullNameValid = this.validate('fullName');


    return (
      <form className="new-student-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            name="fullName"
            value={this.state.fullName}
            onChange={this.onFieldChange}
            className={fullNameValid ? 'valid' : 'invalid'}

          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.onFieldChange}
            className={emailValid ? 'valid' : 'invalid'}

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