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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className='container col-6'>
        <form onSubmit={this.handleSubmit} onReset={this.handleCancel}>
          <div className='form-row input-group flex-nowrap'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>
                <i className='fas fa-user'></i>
              </span>
            </div>
            <input required type='text' id='name-input' className='form-control' placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
          </div>

          <div className='form-row input-group flex-nowrap'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>
                <i className='far fa-list-alt'></i>
              </span>
            </div>
            <input required type='text' id='course-input' className='form-control' placeholder='Course' value={this.state.course} onChange={this.handleChange}/>
          </div>

          <div className='form-row input-group flex-nowrap'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>
                <i className='fas fa-graduation-cap'></i>
              </span>
            </div>
            <input required min='1' max='100' type='number' id='grade-input' className='form-control' placeholder='Grade (1-100)' value={this.state.grade} onChange={this.handleChange}/>
          </div>

          <div className="form-row d-inline-flex justify-content-start">
            <button type='submit' className='btn btn-success'>Add</button>
            <button type='reset' className='btn btn-secondary'>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
