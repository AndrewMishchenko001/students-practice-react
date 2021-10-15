import StudentsForm from "../StudentsForm/StudentsForm";
import StudentsList from "../StudentsList/StudentsList";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Students extends Component {
  state = {
    students: [{ name: "Alex", course: "React", age: "30", id: uuidv4() }],
  };

  addStudent = (student) => {
    this.setState((prev) => ({
      students: [...prev.students, { ...student, id: uuidv4() }],
    }));
    console.log("this.state :>> ", this.state);
  };

  removeStudent = (id) => {
    this.setState((prev) => ({
      students: prev.students.filter((student) => student.id !== id),
    }));
  };

  render() {
    return (
      <section>
        <StudentsForm addStudent={this.addStudent} />
        <StudentsList
          students={this.state.students}
          removeStudent={this.removeStudent}
        />
      </section>
    );
  }
}

export default Students;
