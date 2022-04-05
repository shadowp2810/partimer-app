import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./CardHolderP.css";

function CardHolderP({
  selected,
  setSelected,
  setIdofpartimertoshow,
  setShowPartimerProfile,
}) {
  // const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    const index = selected.indexOf(id);
    if (index > -1) {
      setSelected(selected.filter((item) => item !== id));
      return;
    }
    setSelected((selected) => [...selected, id]);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const partimersNM = [
    {
      id: 0,
      name: "Ally Mungo",
      skill1: "catering staff",
      skill2: "errands",
      skill3: "driver",
      rating: 4.9,
      distance: 2,
      mobile: "+1 940 925 9956",
    },
    {
      id: 1,
      name: "Blair Grant",
      skill1: "customer service",
      skill2: "errands",
      skill3: "receptionist",
      rating: 4.9,
      distance: 2,
      mobile: "+1 034 956 0024",
    },
    {
      id: 2,
      name: "Kalea Ruairi",
      skill1: "resteraunt staff",
      skill2: "catering staff",
      skill3: "sales associate",
      rating: 4.9,
      distance: 2,
      mobile: "+1 304 503 8856",
    },
    {
      id: 3,
      name: "Edric Seo-Yeon",
      skill1: "resteraunt staff",
      skill2: "receptionist",
      skill3: "driver",
      rating: 4.9,
      distance: 2,
      mobile: "+1 456 263 5583",
    },
    {
      id: 4,
      name: "Kyle Meredith",
      skill1: "catering staff",
      skill2: "cleaning",
      skill3: "errands",
      rating: 4.9,
      distance: 2,
      mobile: "+1 174 325 3725",
    },
  ];

  function functionName(partimerNM) {
    setIdofpartimertoshow(partimerNM);
    setShowPartimerProfile(true);
  }
  return (
    <div className="cardHolder__CHP">
      {partimersNM.map((partimerNM) => (
        <div className="buttonDiv__CHP" key={partimerNM.id}>
          <button
            className="buttonStyle__CHP"
            onClick={() => functionName(partimerNM)}
          >
            <Card
              name={partimerNM.name}
              skill1={partimerNM.skill1}
              skill2={partimerNM.skill2}
              skill3={partimerNM.skill3}
              rating={partimerNM.rating}
              distance={partimerNM.distance}
            />
          </button>
          <button
            className="buttonStyle__CHP"
            onClick={() => handleSelect(partimerNM.id)}
          >
            <div className="cardSelectorDiv__CHP">
              <div className="cardSelectorHole__CHP">
                {selected.indexOf(partimerNM.id) > -1 ? (
                  <div className="cardSelectorHoleSelected__CHP"></div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardHolderP;
