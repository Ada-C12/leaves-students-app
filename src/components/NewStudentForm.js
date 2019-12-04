import React, { Component } from 'react';
import  './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();
    this.state ={
      fullName: '',
      email: '',
    }
  }

  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      fullName: event.target.value,
    })
  }

  onEmailChange = (event) => {
    console.log(`Email Field updated ${event.target.value}`);
    this.setState({
      email: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault(); 

    const newStudent = {
      fullName: this.state.fullName,
      email: this.state.email
    }

    this.setState({
      fullName: '',
      email: ''
    })

    this.props.addStudentCallback(newStudent)
  }

  render() {
    return (
      <form className="new-student-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input 
          name="fullName"
          value={this.state.fullName}
          onChange={this.onNameChange} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
          name="email" 
          value={this.state.email}
          onChange={this.onEmailChange} 
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