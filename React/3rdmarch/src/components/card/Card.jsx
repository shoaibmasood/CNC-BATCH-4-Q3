import React from "react";
import "./card.css";

const Card = ({ name, age, skills, image }) => {
  return (
    <React.Fragment>
      <div className="card">
        <img src={image} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{name}</b>
            <br />
            <b>{age}</b>
          </h4>
          {skills.map((item, index) => (
            <span key={index}>{item},</span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
