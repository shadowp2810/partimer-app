import React from "react";
import "./Card.css";
import { ArrowForward } from "@mui/icons-material";

function Card(props) {
  return (
    <div className="cardDiv">
      <div className="cardBody">
        <div className="cardPhotoRating">
          <div className="cardPhoto"></div>
          <div className="cardRating">
            <p>{props.rating} ☆</p>
          </div>
        </div>
        <div className="cardNameTags">
          <div className="cardName">
            <p>{props.name}</p>
          </div>
          <div className="cardTags">
            <ul>
              <li>{props.skill1}</li>
              <li>{props.skill2}</li>
              <li>{props.skill3}</li>
            </ul>
          </div>
        </div>
        <div className="cardArrowKM">
          <div>
            <ArrowForward className="profileArrowC" />
          </div>

          <p className="cardKM">{props.distance}km</p>
        </div>
        {/* <div className="cardSelectorDiv">
          <div className="cardSelectorHole"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;

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
