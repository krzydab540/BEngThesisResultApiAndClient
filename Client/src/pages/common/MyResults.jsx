import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GenerateResult from "./GenerateResult";
import UserStore from "./stores/UserStore";
import Result from "./Result";

class MyResults extends Component {
  async componentDidMount(props) {
    try {
      let res = await fetch("https://localhost:44301/api/Result/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idPatient: localStorage.getItem("userId"),
          // email: this.state.email, ^THIS.STATE
        }),
      });

      let listOfRes = await res.json();
      // console.log(listOfRes.results);

      this.listItems = listOfRes.results.map((result) => (
        <li className="result-list-item" key={result.idResult}>
          <div className="result-component">{result.idResult}</div>

          <div className="result-component result-date">
            {result.dateOfPerform}
          </div>

          <div className="result-component result-technician">
            {result.technician}
          </div>

          {/* <button className = "btn btn-primary middle-btn result-component" onClick={GenerateResult(result.idResult)}>Proceed to result</button> */}

          <div className="btn btn-primary middle-btn result-component">
            <Link
              to={{
                pathname: "/result",
                state: {
                  idResult: result.idResult,
                },
              }}
            >
              Proceed to result
            </Link>
          </div>
        </li>

      ));
    } catch (e) {
      console.log(e);
    }
  }

  // TODO: You need to reload page in order to view list

  render() {
    return (
      <div className="main-container">
        <div className="padded-container-sides">
          <ul className="result-list">{this.listItems}</ul>
        </div>
      </div>
    );
  }
}

export default MyResults;
