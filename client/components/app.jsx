import React from 'react';
import Header from './header';
// import Header from './header';

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

  render() {
    return (
      <Header/>
    );
  }
}

export default App;
