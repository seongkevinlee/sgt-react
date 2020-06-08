import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGrades: 0,
      emptyTableClass: 'd-none'
    };
    this.renderGradeRows = this.renderGradeRows.bind(this);
    this.handleEmpty = this.handleEmpty.bind(this);
    this.countNumberOfGrades = this.countNumberOfGrades.bind(this);
  }

  renderGradeRows(props) {
    const grades = this.props.grades;
    const deleteGrade = this.props.deleteGrade;
    const gradeRows = grades.map(grade => {
      return <Grade
        key={grade.id}
        grade={grade}
        deleteGrade={deleteGrade}/>;
    });
    return gradeRows;
  }

  componentDidMount() {
    this.handleEmpty();
    // console.log('this.props:', this.props);
    // this.countNumberOfGrades();
    // console.log('props.grades.length', this.props.grade.length);
  }

  countNumberOfGrades() {
    const gradeCount = this.props.grades.length;
    this.setState({
      numberOfGrades: gradeCount
    });
    // console.log('gradeNumber:', gradeCount);
    // console.log('this.props:', this.props);
  }

  handleEmpty() {
    this.countNumberOfGrades();
    // const numberOfGrades = this.state.numberOfGrades;
    // console.log('numberOfGrades:', numberOfGrades);
    // console.log('props:', this.props);
    // console.log('this.props.grades.length', this.props.grades.length);
    if (this.props.grades.length < 1) {
      this.setState({
        emptyTableClass: 'visible'
      });
    } else {
      this.setState({
        emptyTableClass: 'd-none'
      });
    }
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
            <tr className={this.state.emptyTableClass}>
              <td>No Grades Recorded</td>
            </tr>
            {this.renderGradeRows()}
          </tbody>
        </table>
      </div>
    );
  }
}
