import React from "react";
import ProfileCardHolder from "../../components/ProfileCardHolder/ProfileCardHolder";
import "./ProfilePartimerBusiness.css";

function ProfilePartimerBusiness(props) {
  return (
    <div>
      <div className="maindivtop">
        <div className="almostAll">
          <div className="profile">
            <div className="photoDiv">
              <div className="photo"></div>
            </div>
            <div className="detailsDiv">
              <div className="pnameNumberText">
                <p className="pnameText">Firstname Lastname</p>
                <p className="numberText">+1 840 302 9934</p>
              </div>
              <div className="cardTags">
                <ul>
                  <li>customer service</li>
                  <li>errands</li>
                  <li>receptionist</li>
                </ul>
              </div>
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
        </div>
      </div>
    </div>
  );
}

export default ProfilePartimerBusiness;
