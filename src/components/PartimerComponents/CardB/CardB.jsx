import React from "react";
import "./CardB.css";
import { ArrowForward } from "@mui/icons-material";

function CardB(props) {
  return (
    <div className="cardDiv__CB">
      <div className="cardBody__CB">
        <div className="cardNameTags__CB">
          <div className="cardNameP__CB">
            <p>{props.placename}</p>
          </div>
          <div className="cardName__CB">
            <p>{props.address}</p>
          </div>
          <div className="cardName__CB">
            <p>{props.offer}</p>
          </div>
        </div>
        <div className="cardArrowKM__CB">
          <div>
            <ArrowForward className="profileArrowC__CB" />
          </div>
          <p className="cardKM__CB">{props.distance}km away</p>
          <div className="cardRating__CB">
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
