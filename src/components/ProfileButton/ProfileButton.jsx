import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./ProfileButton.css";

function ProfileButton(props) {
  return (
    <>
      <button className="profileButton">
        <ArrowForward className="profileArrow" />
        <p className="profileText">Profile</p>
      </button>
    </>
  );
}

export default ProfileButton;
