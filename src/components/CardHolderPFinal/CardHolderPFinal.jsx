import React from "react";
import Card from "../Card/Card";
import "./CardHolderPFinal.css";

function CardHolderPFinal(props) {
  return (
    <div className="cardHolder">
      <Card />
      <Card />
    </div>
  );
}

export default CardHolderPFinal;
