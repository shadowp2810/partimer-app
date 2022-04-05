import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./CardHolderP.css";

function CardHolderP({
  data,
  query,
  searchKeys,
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

  function functionName(partimerNM) {
    setIdofpartimertoshow(partimerNM);
    setShowPartimerProfile(true);
  }
  return (
    <div className="cardHolder__CHP">
      {data
        // .filter((partimerNM) =>
        //   searchKeys.some((sKey) =>
        //     partimerNM[sKey].toLowerCase().includes(query)
        //   )
        // )
        .map((partimerNM) => (
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
