import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="mainDiv__PC">
      <div className="nameDateRating__PC">
        <p className="nameText__PC">Place Name</p>
        <p className="dateText__PC">Date and Time</p>
        <div className="rating__PC">
          <p className="ratingText__PC">4.8 ☆</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
