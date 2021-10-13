import React, { Component } from "react";

class StudentsForm extends Component {
  state = {
    name: "",
    course: "",
    age: "",
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };

  render() {
    return (
      <form action="" onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Course
          <input
            type="text"
            value={this.state.course}
            name="course"
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            value={this.state.age}
            name="age"
            onChange={this.onHandleChange}
          />
        </label>
        <button type="submit">Add student </button>
      </form>
    );
  }
}

export default StudentsForm;
