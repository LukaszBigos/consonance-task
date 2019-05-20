import React from "react";
import Employee from "../Employee/Employee";

export default class EmployeesList extends React.Component {
  render() {
    const { employees } = this.props;
    return (
      <div>
        {employees.map(employee => {
          return <Employee key={employee.name} employee={employee} />;
        })}
      </div>
    );
  }
}
