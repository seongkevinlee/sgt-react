import React from 'react';

function Grade(props) {
  const name = props.grade.name;
  const course = props.grade.course;
  const grade = props.grade.grade;
  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default Grade;
