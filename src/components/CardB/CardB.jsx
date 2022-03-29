import React from "react";
import "./CardB.css";
import { ArrowForward } from "@mui/icons-material";

function CardB(props) {
  return (
    <div className="cardDiv">
      <div className="cardBody">
        <div className="cardNameTags">
          <div className="cardNameP">
            <p>{props.placename}</p>
          </div>
          <div className="cardName">
            <p>{props.address}</p>
          </div>
          <div className="cardName">
            <p>{props.offer}</p>
          </div>
        </div>
        <div className="cardArrowKM">
          <div>
            <ArrowForward className="profileArrowC" />
          </div>
          <p className="cardKM">{props.distance}km away</p>
          <div className="cardRating">
            <p>{props.rating} ☆</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardB;

/*
Resteraunt Staff
Receptionist
Errands
Sales Associate
Cleaning
Driver
Cafeteria Staff
Customer Service
*/
