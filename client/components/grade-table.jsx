/* eslint-disable no-console */
import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: false
    };
    this.renderGrades = this.renderGrades.bind(this);
  }

  renderGrades(props) {
    const grades = this.props.grades;
    console.log('renderGrades grades:', grades);
    const gradeRow = grades.map(grade => {
      return <Grade key={grade.id} grades={grade}/>;
      // return {
      //   id: grade.id,
      //   name: grade.name,
      //   course: grade.course,
      //   grade: grade.grade
      // };
    });
    console.log('gradeRow:', gradeRow);
  }

  render() {
    const grades = this.props.grades;
    console.log('render grades:', grades);
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
            <Grade key={grades.id} grades={grades[0]}/>
            {/* {this.renderGrades()} */}
          </tbody>
        </table>
      </div>
    );
  }
}
