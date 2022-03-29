import React from "react";
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import CurrentBookingsButton from "../../components/CurrentBookingsButton/CurrentBookingsButton";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import CardHolderP from "../../components/CardHolderP/CardHolderP";

import "./HomeBusiness.css";

function HomeBusiness(props) {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className="profileNearMe">
        <ProfileButton />
        <p className="nearmeText">Partimers Near Me.</p>
      </div>

      <CurrentBookingsButton />
      <div className="homeBusinessSearch">
        <form className="homesearchformb">
          <label>
            <input
              type="text"
              name="name"
              placeholder="Search"
              className="homesearchb"
            />
          </label>
          <input type="submit" value="ⓢ" className="homesearchSb" />
        </form>
      </div>
      <p className="nearmeTextSort">▾</p>
      {/* <div className="sorter">
        <p className="nearmeTextSort">▾</p>
      </div> */}
      <CardHolderP selected={selected} setSelected={setSelected} />
      <div className="homeNextButtonDiv">
        <button className="homeNextButton">
          <p className="homeNextText">Next</p>
          <div>
            <ArrowForward className="homeNextArrow" />
            <div>
              <p className="homeNextTextNum">{selected.length}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default HomeBusiness;

/*


  function ComboBox() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={worktags}
        sx={{ width: 300, "background-color": "grey" }}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    );
  }

  const worktags = [
    { label: "cafeteria staff" },
    { label: "cleaning" },
    { label: "customer service" },
    { label: "driver" },
    { label: "errands" },
    { label: "receptionist" },
    { label: "resteraunt staff" },
    { label: "sales associate" },
  ];

*/
