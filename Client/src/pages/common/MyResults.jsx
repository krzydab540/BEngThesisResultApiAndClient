import React, { Component } from "react";
import { Link } from "react-router-dom";
import Unauthorized from "./Unauthorized";

var isLoggedIn;

class MyResults extends Component {
  async componentDidMount(props) {
    let auth = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      isLoggedIn=1
      try {
        let res = await fetch("https://localhost:44301/api/Result/", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth,
          },
          body: JSON.stringify({
            idPatient: localStorage.getItem("userId"),
            // email: this.state.email, ^THIS.STATE
          }),
        });
        let listOfRes = await res.json();

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
  }
  // TODO: You need to reload page in order to view list

  render() {
    if(isLoggedIn){
      return (
        <div className="main-container">
          <div className="padded-container-sides">
            <ul className="result-list">{this.listItems}</ul>
          </div>
        </div>
      );
    }
    else{
      return(
        <Unauthorized/>
      )
    }
  }
}

export default MyResults;
