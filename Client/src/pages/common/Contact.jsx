import React, { useEffect, useRef } from "react";

export default function Contact() {
  return (
    <div className="main-container">
      <div className="padded-container">
        <div className="address-container">
          <h1>Sample Name Laboratory</h1>
          <h3> 40 Roosevelt St.</h3>
          <h3>Zabrze, Poland </h3>
          <h3> +48 123 456 789, </h3>
          <h3> samplelab@sample.com </h3>
        </div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Zabrze%20roosevelta%2040&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.embedgooglemap.net">embed google map</a>
          </div>
        </div>
      </div>
    </div>
  );
}
