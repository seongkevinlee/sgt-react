/* eslint-disable no-console */

import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    const allGrades = this.state.grades;
    const allGradesArray = [];
    allGrades.forEach(gradeRow => {
      allGradesArray.push(gradeRow.grade);
      console.log('allGradesArray1:', allGradesArray);
    });
    console.log('allGradesArray2:', allGradesArray);
    const gradesTotal = allGradesArray.reduce((a, b) => {
      return a + b;
    }, 0);
    const gradesAverage = Math.floor(gradesTotal / allGradesArray.length);
    console.log('allGradesArray3:', allGradesArray);
    return gradesAverage;

  }

  render() {
    return (
      <div className='container col-12'>
        <Header averageGrade={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
