import React, { useEffect, useRef } from "react";


class About extends React.Component {
  render() {
    if (localStorage.getItem("token") != null) {
      return <div>Logged in!</div>;
    } else {
      return <div>Boo!</div>;
    }
  }
}

export default(About);
