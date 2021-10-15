import React from "react";

const StudentsList = ({ students, removeStudent }) => {
  //   const removeItem = () => removeStudent(students.id);
  return (
    <ul>
      {students.map(({ id, name, course, age }) => (
        <li key={id}>
          <h2>{name}</h2>
          <p>{course}</p>
          <p>{age}</p>
          <button type="button" onClick={() => removeStudent(id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
