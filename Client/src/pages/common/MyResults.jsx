import React, { Component } from 'react';

class MyResults extends Component() {
  async componentDidMount() {

    try{
      let res = await fetch(
        "api/Results/Get",
        {
          method:"get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let listOfRes = await res.json();
      console.log(listOfRes.results);
    }

    catch(e){
      console.log(e);
    }
   
  }
  
  render(){
    return (
      <div className="main-container">
        <div className="padded-container">
  
  
  
        </div>
      </div>
    );
  }

}

export default MyResults;