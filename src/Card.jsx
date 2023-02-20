import React from "react";
import "./styles/App.scss";

function Card({ header, text, image }) {
  return (
    <div className="card-container text-center max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} className="w-full" />
      <div className="card-inner-container">
        <h3 className="header-text font-bold text-2xl py-4">{header}</h3>
        <p className="paragraph-text font-normal pb-7 text-center">{text}</p>
      </div>
    </div>
  );
}

export default Card;
