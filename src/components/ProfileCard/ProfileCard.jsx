import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="mainDiv">
      <div className="nameDateRating">
        <p className="nameText">Place Name</p>
        <p className="dateText">Date and Time</p>
        <div className="rating">
          <p className="ratingText">4.8 ☆</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
