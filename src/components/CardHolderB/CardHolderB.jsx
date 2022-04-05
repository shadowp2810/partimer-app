import React from "react";
import CardB from "../CardB/CardB";
import "./CardHolderB.css";

function CardHolderB(props) {
  const top100Films = [
    {
      placename: "The Shawshank Redemption",
      address: 1994,
      placename: "The Shawshank Redemption",
      address: 1994,
    },
    { label: "The Godfather", year: 1972 },
  ];

  function functionName() {
    console.log("Hey there");
  }

  return (
    <div className="cardHolder__CHB">
      <CardB
        placename="Resterauntology"
        address="3216 Fairfield Road"
        rating="4.8"
        distance="2"
        mobile="+1 715-202-7739"
        offer="3h ~ 60$"
      />
      <CardB
        placename="Boutique Daisy"
        address="4216 Green Avenue"
        rating="4.7"
        distance="1"
        mobile="+1 510-935-5842"
        offer="2h ~ 40$"
      />
      <CardB
        placename="Venture Museum"
        address="4156 Gateway Road"
        rating="4.5"
        distance="2"
        mobile="+1 503-314-0597"
        offer="5h ~ 130$"
      />{" "}
      <CardB
        placename="Foster Farm"
        address="1747 Heron Way"
        rating="4.2"
        distance="2"
        mobile="+1 503-856-5648"
        offer="2h ~ 50$"
      />
    </div>
  );
}

export default CardHolderB;
