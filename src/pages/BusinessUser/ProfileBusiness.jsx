import React from "react";
import ProfileCardHolder from "../../components/BusinessComponents/ProfileCardHolder/ProfileCardHolder";
import "./ProfileBusiness.css";

function ProfileBusiness({ setShowPartimerProfile, idofpartimertoshow }) {
  return (
    <div className="absolute__PB">
      <div className="maindivtop__PB">
        <div className="almostAll__PB">
          <div className="profile__PB">
            <div className="photoDiv__PB">
              <div className="photo__PB"></div>
            </div>
            <div className="detailsDiv__PB">
              <div className="pnameNumberText__PB">
                <p className="pnameText__PB">{idofpartimertoshow.name}</p>
                <p className="numberText__PB">{idofpartimertoshow.mobile}</p>
              </div>
              <div className="cardTags__PB">
                <ul>
                  <li>{idofpartimertoshow.skill1}</li>
                  <li>{idofpartimertoshow.skill2}</li>
                  <li>{idofpartimertoshow.skill3}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="kmRating__PB">
            <p className="kmtext__PB">{idofpartimertoshow.distance}km</p>
            <p className="kmrating__PB">{idofpartimertoshow.rating} ☆</p>
          </div>
        </div>
      </div>
      <div className="cardHolder__PB">
        <ProfileCardHolder />
      </div>
      <div className="maindivbottom__PB">
        <div className="twobuttons__PB">
          <buton
            className="backButton__PB"
            onClick={() => setShowPartimerProfile(false)}
          >
            <p className="backButtonText__PB">back</p>
          </buton>
        </div>
      </div>
    </div>
  );
}

export default ProfileBusiness;
