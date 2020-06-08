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
    const deleteGrade = this.props.deleteGrade;
    const gradeRows = grades.map(grade => {
      return <Grade key={grade.id} grade={grade} deleteGrade={deleteGrade}/>;
    });
    return gradeRows;
  }

  render() {
    return (
      <div className='container col-8'>
        <table className='table table-striped'>
          <thead className='table-header thead-dark'>
            <tr className='table-row1 d-flex col-12'>
              <th className='col-4'>Student Name</th>
              <th className='col-4'>Course</th>
              <th className='col-2 text-center'>Grade</th>
              <th className='col-2 text-center'>Operation</th>
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
