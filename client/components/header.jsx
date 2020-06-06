import React from 'react';

function Header(props) {
  const averageGrade = props.averageGrade;
  return (
    <div className='container col-12 d-inline-flex align-items-center'>
      <div className='title col-9'>
        <h1>Student Grade Table</h1>
      </div>
      <div>
        <h4>Average Grade:&nbsp;
          <span className='badge badge-danger'>
            {!averageGrade ? '##' : averageGrade}
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Header;
