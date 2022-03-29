import React from "react";
import ProfileCardHolder from "../../components/ProfileCardHolder/ProfileCardHolder";
import "./ProfileBusinessPartimer.css";

function ProfileBusinessPartimer(props) {
  return (
    <div>
      <div className="maindivtop">
        <div className="almostAll">
          <div className="profile">
            <div className="detailsDiv">
              <div className="pnameNumberText">
                <p className="pnameText">Plance name</p>
                <p className="numberText">+1 840 302 9934</p>
                <p className="addressText">732 Marshall St. </p>
              </div>
            </div>
            <div className="hourstotaldiv">
              <p className="hours">3h </p>
              <p className="total">60$ </p>
            </div>
          </div>
          <div className="kmRating">
            <p className="kmtext">2km</p>
            <p className="kmrating">4.8 ☆</p>
          </div>
        </div>
      </div>
      <ProfileCardHolder />
      <div className="maindivbottom">
        <div className="twobuttons">
          <buton className="backButton">
            <p className="backButtonText">back</p>
          </buton>
          <buton className="backButtonA">
            <p className="backButtonTextA">ACCEPT</p>
          </buton>
        </div>
      </div>
    </div>
  );
}

export default ProfileBusinessPartimer;
