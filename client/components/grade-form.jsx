import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
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
          <input type='text' className='form-control' placeholder='Name'/>
        </div>

        <div className='row input-group flex-nowrap'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='far fa-list-alt'></i>
            </span>
          </div>
          <input type='text' className='form-control' placeholder='Course'/>
        </div>

        <div className='row input-group flex-nowrap'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-graduation-cap'></i>
            </span>
          </div>
          <input type='text' className='form-control' placeholder='Grade'/>
        </div>

        <div className="row d-inline-flex justify-content-start">
          <button className='btn btn-success'>Add</button>
          <button className='btn btn-secondary'>Cancel</button>
        </div>
      </div>
    );
  }
}
