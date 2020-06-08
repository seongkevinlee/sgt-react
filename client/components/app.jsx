import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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
      allGradesArray.push(parseInt(gradeRow.grade));
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

  deleteGrade(gradeId) {
    const gradeIndex = this.state.grades.findIndex(grade => gradeId === grade.id);
    fetch(`api/grades/${gradeId}`, {
      method: 'DELETE',
      body: {}
    })
      .then(response => response.json())
      .then(data => {
        const newGradeList = [...this.state.grades];
        delete newGradeList[gradeIndex];
        this.setState({ grades: newGradeList });
        this.getAllGrades();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container col-12'>
        <Header averageGrade={this.getAverageGrade()}/>
        <div className='container col-12 d-inline-flex'>
          <GradeTable
            grades={this.state.grades}
            deleteGrade={this.deleteGrade}/>
          <GradeForm onSubmit={this.addNewGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
