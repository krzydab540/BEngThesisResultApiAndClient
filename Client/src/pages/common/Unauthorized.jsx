import React, { useEffect, useRef } from "react";

export default function Unauthorized() {
  return (
    <div className="padding-center">
      <h1 className="padded-header">You have to be logged in in order to view this page.</h1>
      <img src={"images/lockicon.png"} alt="lock-icon" className="lock-icon" />
    </div>
  );
}
