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
      <div className='container'>
        <div className='row'>
          <i className='fas fa-user'></i>
          <input type='text' placeholder='Name'/>
        </div>
        <div className='row'>
          <i className='far fa-list-alt'></i>
          <input type='text' placeholder='Course'/>
        </div>
        <div className='row'>
          <i className='fas fa-graduation-cap'></i>
          <input type='text' placeholder='Grade'/>
        </div>
        <div className="row">
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}
