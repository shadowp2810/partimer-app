import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./CurrentBookingsButton.css";

function CurrentBookingsButton(props) {
  return (
    <>
      <button className="currentbookingsButton">
        <p className="currentbookingsText">Current Bookings</p>
        <ArrowForward className="currentbookingsArrow" />
      </button>
    </>
  );
}

export default CurrentBookingsButton;
