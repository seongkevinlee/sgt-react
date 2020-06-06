/* eslint-disable no-console */
import React from 'react';

function Header(props) {
  const averageGrade = props.averageGrade;
  console.log('Header averageGrade:', averageGrade);
  return (
    <div className='container col-12'>
      <div className='title'>
        <h1>Student Grade Table</h1>
      </div>
      <div>
        <h1>
          <span className='badge badge-danger'>
            {averageGrade}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
