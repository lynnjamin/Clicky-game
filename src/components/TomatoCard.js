import React from "react";
import "./tomatoCardStyles.css";

function TomatoCard(props) {
  return (
    <div className="card" onClick={() => props.comboFunction(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default TomatoCard;
