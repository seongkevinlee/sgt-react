/* eslint-disable no-console */
import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: false
    };
    this.renderGradeRows = this.renderGradeRows.bind(this);
  }

  renderGradeRows(props) {
    const grades = this.props.grades;
    const gradeRows = grades.map(grade => {
      return <Grade key={grade.id} grade={grade}/>;
    });
    return gradeRows;
  }

  render() {
    return (
      <div className='container col-12'>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGradeRows()}
          </tbody>
        </table>
      </div>
    );
  }
}
