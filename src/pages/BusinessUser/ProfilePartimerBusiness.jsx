import React from "react";
import ProfileCardHolder from "../../components/ProfileCardHolder/ProfileCardHolder";
import "./ProfilePartimerBusiness.css";

function ProfilePartimerBusiness({
  setShowPartimerProfile,
  idofpartimertoshow,
}) {
  return (
    <div className="absolute__PPB">
      <div className="maindivtop__PPB">
        <div className="almostAll__PPB">
          <div className="profile__PPB">
            <div className="photoDiv__PPB">
              <div className="photo__PPB"></div>
            </div>
            <div className="detailsDiv__PPB">
              <div className="pnameNumberText__PPB">
                <p className="pnameText__PPB">{idofpartimertoshow.name}</p>
                <p className="numberText__PPB">{idofpartimertoshow.mobile}</p>
              </div>
              <div className="cardTags__PPB">
                <ul>
                  <li>{idofpartimertoshow.skill1}</li>
                  <li>{idofpartimertoshow.skill2}</li>
                  <li>{idofpartimertoshow.skill3}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="kmRating__PPB">
            <p className="kmtext__PPB">{idofpartimertoshow.distance}km</p>
            <p className="kmrating__PPB">{idofpartimertoshow.rating} ☆</p>
          </div>
        </div>
      </div>
      <div className="cardHolder__PPB">
        <ProfileCardHolder />
      </div>
      <div className="maindivbottom__PPB">
        <div className="twobuttons__PPB">
          <buton
            className="backButton__PPB"
            onClick={() => setShowPartimerProfile(false)}
          >
            <p className="backButtonText__PPB">back</p>
          </buton>
        </div>
      </div>
    </div>
  );
}

export default ProfilePartimerBusiness;
