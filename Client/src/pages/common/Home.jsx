import React, { useEffect, useRef } from "react";
import SideImage from "./SideImage";
import RedirectButton from "./RedirectButton"
import HeaderPhoto from "./HeaderPhoto"


export default function Home() {
  return (
    <div className="main-container">
      
      <HeaderPhoto imageLink="images/labheader.jpg"
      text = "All of your lab results. Here. Now."
      />

      <SideImage header="Professional staff" 
      text="Our emplyees have years of experience, providing you the highest quality of their work." 
      imageLink="images/emptybeakers.jpg" left="1" />

      <SideImage header="Quick and safe"
       text="Our laboratories are modern and professional, ensuring that the process is safe and comfortable for every patient." 
       imageName="images/labworking1.jpg" />

       <RedirectButton redirectTo={"MyResults"} text={"Proceed to your results"}/>
    </div>
  );
}
