import React from "react";
import "./Employee.css";
import redSaber from "../../assets/red-saber.png";

export default class EmployeesDetails extends React.Component {
  state = {
    showDetails: false
  };

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    const {
      name,
      height,
      mass,
      birth_year,
      gender,
      hair_color,
      skin_color,
      eye_color
    } = this.props.employee;

    const details = (
      <React.Fragment>
        <div>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Birth Year: {birth_year}</p>
          <p>Gender: {gender}</p>
        </div>
        <div>
          <p>Hair: {hair_color}</p>
          <p>Skin: {skin_color}</p>
          <p>Eye: {eye_color}</p>
        </div>
        <div className="square" />
      </React.Fragment>
    );

    return (
      <div className="employee-wrapper">
        <p onClick={() => this.toggleDetails()}>{name}</p>
        <div
          className={
            "details-container " +
            (this.state.showDetails ? "details-shown" : 'details-hidden')
          }
        >
          {this.state.showDetails && details}
        </div>
        <img src={redSaber} alt="red flash saber" />
      </div>
    );
  }
}
