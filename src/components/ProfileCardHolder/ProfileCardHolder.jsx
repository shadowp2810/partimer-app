import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileCardHolder.css";

function ProfileCardHolder(props) {
  return (
    <div className="cardHolderPH">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default ProfileCardHolder;
