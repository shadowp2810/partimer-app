import React from "react";
import { ArrowForward } from "@mui/icons-material";
import "./CurrentBookingsButton.css";

function CurrentBookingsButton(props) {
  return (
    <>
      <button className="currentbookingsButton__CBB">
        <p className="currentbookingsText__CBB">Current Bookings</p>
        <ArrowForward className="currentbookingsArrow__CBB" />
      </button>
    </>
  );
}

export default CurrentBookingsButton;
