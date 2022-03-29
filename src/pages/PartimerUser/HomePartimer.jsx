import React from "react";
import "./HomePartimer.css";
import CardHolderB from "../../components/CardHolderB/CardHolderB";
import CurrentBookingsButton from "../../components/CurrentBookingsButton/CurrentBookingsButton";

function HomePartimer(props) {
  return (
    <div>
      <div className="profilephotorequests">
        <div className="profilePhoto"></div>
        <div>
          <p className="profilerequests">REQUESTS</p>
        </div>
      </div>
      <div className="profilephotorequests">
        <div className="currentbookings">
          <CurrentBookingsButton />
        </div>
        <div>
          <p className="sortby">Sort By ▿</p>
        </div>
      </div>
      <CardHolderB />
    </div>
  );
}

export default HomePartimer;
