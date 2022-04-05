import React from "react";
import { useEffect, useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import CurrentBookingsButton from "../../components/CurrentBookingsButton/CurrentBookingsButton";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import CardHolderP from "../../components/CardHolderP/CardHolderP";
import ProfilePartimerBusiness from "./ProfilePartimerBusiness";
import ProfilePartimerConfirmBusiness from "./ProfilePartimerConfirmBusiness";

import "./HomeBusiness.css";

function HomeBusiness(props) {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [selected, setSelected] = useState([]);
  const [showPartimerProfile, setShowPartimerProfile] = useState(false);
  const [showConfirmScreen, setShowConfirmScreen] = useState(false);
  const [idofpartimertoshow, setIdofpartimertoshow] = useState(-1);
  const [query, setQuery] = useState("");
  const searchKeys = ["name", "skill1", "skill2", "skill3"];

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

  useEffect(() => {
    console.log(idofpartimertoshow);
    console.log(showPartimerProfile);
  }, [idofpartimertoshow, showPartimerProfile]);

  function function2(partimerNM) {
    setShowConfirmScreen(true);
    console.log(searchFunction(partimersNM));
  }

  const searchFunction = (data) => {
    return data.filter((item) =>
      searchKeys.some(
        (key) =>
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(query)
      )
    );
  };

  return (
    <>
      {showPartimerProfile ? (
        <div className="partimerProfileScreen__HB">
          <ProfilePartimerBusiness
            setShowPartimerProfile={setShowPartimerProfile}
            idofpartimertoshow={idofpartimertoshow}
          />
        </div>
      ) : (
        <></>
      )}

      {showConfirmScreen ? (
        <div className="partimerConfirmScreen__HB">
          <ProfilePartimerConfirmBusiness
            setShowConfirmScreen={setShowConfirmScreen}
            selected={selected}
            setSelected={setSelected}
            setIdofpartimertoshow={setIdofpartimertoshow}
            setShowPartimerProfile={setShowPartimerProfile}
          />
        </div>
      ) : (
        <></>
      )}

      <div className="defaultHome__HB">
        <div className="profileNearMe__HB">
          <div className="profileButton__HB">
            <ProfileButton />
          </div>
          <p className="nearmeText__HB">Partimers Near Me.</p>
        </div>
        <div className="currentbookingsButton__HB">
          <CurrentBookingsButton />
        </div>
        <div className="searchCHolderNextBMainDiv__HB">
          <div className="searchCHolderNextBInsideDiv__HB">
            <div className="homeBusinessSearch__HB">
              <form>
                <textarea
                  name="search"
                  placeholder=" Search.."
                  className="homesearchb__HB"
                  cols={20}
                  rows={1}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
            </div>
            <div className="cardHolderP__HB">
              <CardHolderP
                data={searchFunction(partimersNM)}
                query={query}
                searchKeys={searchKeys}
                selected={selected}
                setSelected={setSelected}
                setIdofpartimertoshow={setIdofpartimertoshow}
                setShowPartimerProfile={setShowPartimerProfile}
              />
            </div>
            <div className="homeNextButtonDiv__HB">
              <button
                className="homeNextButton__HB"
                onClick={() => function2(selected)}
              >
                <p className="homeNextText__HB">Next</p>
                <div>
                  <ArrowForward className="homeNextArrow__HB" />
                  <div>
                    <p className="homeNextTextNum__HB">{selected.length}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
