import React from 'react';

function Grade(props) {
  const name = props.grade.name;
  const course = props.grade.course;
  const grade = props.grade.grade;
  const gradeId = props.grade.id;
  return (
    <tr className='d-flex'>
      <td className='col-4'>{name}</td>
      <td className='col-4'>{course}</td>
      <td className='col-2 text-center'>{grade}</td>
      <td className='col-3 text-center'>
        <button
          className='delete-btn btn btn-danger btn-sm'
          onClick={() => props.deleteGrade(gradeId)}>
          {'DELETE'}
        </button>
      </td>
    </tr>
  );
}

export default Grade;
