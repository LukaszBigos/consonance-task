import React from 'react';

export default function EmployeesList(props) {
  const { employees } = props;
  return (
    <div>
      {employees.map(employee => {
        return (<p>{employee.name}</p>);
      })}
    </div>
  )
}
