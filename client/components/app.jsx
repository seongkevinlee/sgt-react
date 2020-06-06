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
        console.log('this.state.grades:', this.state.grades);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container col-12'>
        <Header/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
