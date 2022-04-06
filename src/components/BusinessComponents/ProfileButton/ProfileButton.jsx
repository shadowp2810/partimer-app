import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./ProfileButton.css";

function ProfileButton(props) {
  return (
    <>
      <button className="profileButton__PB">
        <p className="profileText__PB">Profile</p>
        <ArrowForward className="profileArrow__PB" />
      </button>
    </>
  );
}

export default ProfileButton;
