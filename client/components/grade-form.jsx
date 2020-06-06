import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'name-input') {
      this.setState({ name: event.target.value });
    }
    if (event.target.id === 'course-input') {
      this.setState({ course: event.target.value });
    }
    if (event.target.id === 'grade-input') {
      this.setState({ grade: event.target.value });
    }

  }

  render() {
    return (
      <div className='container col-6'>

        <div className='row input-group flex-nowrap'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-user'></i>
            </span>
          </div>
          <input type='text' id='name-input' className='form-control' placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
        </div>

        <div className='row input-group flex-nowrap'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='far fa-list-alt'></i>
            </span>
          </div>
          <input type='text' id='course-input' className='form-control' placeholder='Course' value={this.state.course} onChange={this.handleChange}/>
        </div>

        <div className='row input-group flex-nowrap'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-graduation-cap'></i>
            </span>
          </div>
          <input type='text' id='grade-input' className='form-control' placeholder='Grade' value={this.state.grade} onChange={this.handleChange}/>
        </div>

        <div className="row d-inline-flex justify-content-start">
          <button className='btn btn-success'>Add</button>
          <button className='btn btn-secondary'>Cancel</button>
        </div>
      </div>
    );
  }
}
