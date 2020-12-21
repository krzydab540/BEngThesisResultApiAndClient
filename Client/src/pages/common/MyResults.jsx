import React, { Component } from "react";
import GenerateResult from "./GenerateResult"
import TestResult from "./TestResult"

class MyResults extends Component {
  async componentDidMount(props) {
    try {
      let res = await fetch("https://localhost:44301/api/Result/Get", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let listOfRes = await res.json();
      // console.log(listOfRes.results);

      this.listItems = listOfRes.results.map((result) => (
        <li className="result-list-item" key={result.idResult}>
          <div>{result.idResult}</div>
          <div>{result.dateOfPerform}</div>
          <div>{result.technician}</div>
          <button className = "btn btn-info" onClick={GenerateResult}></button>
        </li>
      ));
      // console.log(listItems);
    } catch (e) {
      console.log(e);
    }
  }

  // TODO: You need to reload page in order to view list

  render() {
    return (
      <div className="main-container">
        <div className="padded-container">
          <ul className="result-list">{this.listItems}</ul>
        </div>
        <TestResult/>
      </div>
    );
  }
}

export default MyResults;
