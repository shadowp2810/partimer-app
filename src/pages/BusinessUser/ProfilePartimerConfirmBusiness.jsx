import React from "react";
import "./ProfilePartimerConfirmBusiness.css";
import CardHolderPFinal from "../../components/CardHolderPFinal/CardHolderPFinal";

function ProfilePartimerConfirmBusiness(props) {
  return (
    <div className="mainDiv">
      <div className="mainDivwidth">
        <div className="pageTitle">
          <p className="pageTitleText">Partimers booking</p>
        </div>
        <div className="hoursdate">
          <div className="phoursForm">
            <p className="phoursForm">
              Set Hours:
              <div className="hoursFormDiv">
                <form className="hoursForm">
                  <input type="text" className="inputHoursForm" />
                </form>
              </div>
              h
            </p>
          </div>
          <div className="prateform">
            <p className="prateform">
              Set Rate:
              <div className="hoursFormDivrate">
                <form className="rateForm">
                  <input type="text" className="inputHoursForm" />
                </form>
              </div>
              $/h
            </p>
          </div>
        </div>
        <div className="removeAndList">
          <div className="removeDivMain">
            <div className="removeDiv">
              <p className="removep">remove</p>
            </div>
          </div>
          <CardHolderPFinal />
        </div>
        <div className="twobuttonsMainDiv">
          <div className="twobuttonsDiv">
            <div className="backbuttonDiv">
              <p className="backbuttonp">back</p>
            </div>
            <div className="bookbuttonDiv">
              <p className="bookbuttonp">BOOK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePartimerConfirmBusiness;
