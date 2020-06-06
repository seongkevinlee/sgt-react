/* eslint-disable no-console */
import React from 'react';

function Grade(props) {
  const name = props.name;
  const course = props.course;
  const grade = props.grade;
  console.log('props.name:', props.name);
  console.log('Grade props:', props);
  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default Grade;
