import React from "react";

const StudentsList = ({ students, removeStudent, id }) => {
  const removeItem = () => removeStudent(id);
  return (
    <ul>
      {students.map((student) => (
        <li key={id}>
          <h2>{student.name}</h2>
          <p>{student.course}</p>
          <p>{student.age}</p>
          <button type="button" onClick={() => removeStudent(removeItem)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
