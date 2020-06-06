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
    });
    const gradesTotal = allGradesArray.reduce((a, b) => {
      return a + b;
    }, 0);
    const gradesAverage = Math.floor(gradesTotal / allGradesArray.length);
    return gradesAverage;
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(grade => {
        this.setState({
          grades: this.state.grades.concat(grade)
        });
      })
      .catch(err => console.error(err));
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
