import React from "react";
import "./Card.css";
import { ArrowForward } from "@mui/icons-material";

function Card(props) {
  return (
    <div className="cardDiv__C">
      <div className="cardBody__C">
        <div className="cardPhotoRating__C">
          <div className="cardPhoto__C"></div>
          <div className="cardRating__C">
            <p>{props.rating} ☆</p>
          </div>
        </div>
        <div className="cardNameTags__C">
          <div className="cardName__C">
            <p>{props.name}</p>
          </div>
          <div className="cardTags__C">
            <ul>
              <li>{props.skill1}</li>
              <li>{props.skill2}</li>
              <li>{props.skill3}</li>
            </ul>
          </div>
        </div>
        <div className="cardArrowKM__C">
          <div>
            <ArrowForward className="profileArrowC__C" />
          </div>

          <p className="cardKM__C">{props.distance}km</p>
        </div>
        {/* <div className="cardSelectorDiv__C">
          <div className="cardSelectorHole__C"></div>
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
