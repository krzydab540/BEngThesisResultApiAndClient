import React from "react";

export default function SideImage({ header, text, imageLink, left }) {
  return (
    <div className={left ? "side-image-left" : "side-image-right"}>
      <h2 className="side-image-header">{header}</h2>
      <p className="side-image-paragraph">{text}</p>
      <img src={imageLink} alt="" className="side-image" />
    </div>
  );
}
