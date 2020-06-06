/* eslint-disable no-console */
import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: false
    };
  }

  renderGrades(props) {
    const grades = this.props.grades;
    console.log('grades:', grades);
    return (
      null
    );
  }

  render() {
    return (
      <div className='container col-12'>
        <table className='table table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <Grade/>
          </tbody>
        </table>
      </div>
    );
  }
}
