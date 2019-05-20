import React, { Component } from "react";
import Header from "./Components/Header/Header";
import EmployeesList from "./Components/EmployeesList/EmployeesList";
import "./App.css";

class App extends Component {
  state = {
    employees: [],
    url: "https://swapi.co/api/people"
  };

  getCharacters = async () => {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      this.setState({
        employees: jsonData.results
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    console.log(this.state.employees);
    return (
      <div className="App">
        <Header />
        <EmployeesList employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;
