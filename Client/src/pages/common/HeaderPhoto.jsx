import React from "react";

export default function HeaderPhoto({ imageLink, text }) {
  return (
    <div className="photo-header-wrapper">
      <img src={imageLink} alt="photo-header" className="photo-header" />
      <h1 className="photo-header-text">{text}</h1>
    </div>
  );
}
