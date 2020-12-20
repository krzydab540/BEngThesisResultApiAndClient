import React, { Component } from "react";

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
        <li className="result-list-item" key={result.idResult.toString}>
          {result.technician}
        </li>
      ));
      // console.log(listItems);

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="padded-container">
          <ul className="result-list">{this.listItems}</ul>
        </div>
      </div>
    );
  }
}

export default MyResults;
