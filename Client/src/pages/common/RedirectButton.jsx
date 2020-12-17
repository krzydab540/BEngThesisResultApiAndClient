import React, { Button } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RedirectButton({ redirectTo, text }) {
  return (
    <Link to={"/" + redirectTo}>
      <div className="middle-btn-wrapper">
        <button type="button" class="btn btn-primary  middle-btn">
          {text}
        </button>
      </div>
    </Link>
  );
}
