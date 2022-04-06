import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./ProfilePartimerConfirmBusiness.css";
import CardHolderPF from "../../components/BusinessComponents/CardHolderPF/CardHolderPF";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";

function ProfilePartimerConfirmBusiness({
  setShowConfirmScreen,
  selected,
  setSelected,
  setIdofpartimertoshow,
  setShowPartimerProfile,
}) {
  const [inputValuePeople, setInputValuePeople] = useState(0);
  const [inputValueTotal, setInputValueTotal] = useState(0);

  const [theDateTime, setTheDateTime] = React.useState(
    new Date("2022-04-01T00:00:00.000Z")
  );

  const inputValueNumber = useRef(0);
  const inputValueHours = useRef(0);
  const inputValueRate = useRef(0);
  const inputNote = useRef("");

  function functionBackButtonConfirm(value) {
    setShowConfirmScreen(false);
  }

  const handleTotal = async (e) => {
    setInputValueTotal(
      inputValueHours.current.value * inputValueRate.current.value
    );
    setInputValuePeople(inputValueNumber.current.value);
  };

  useEffect(() => {
    console.log("hours", inputValueHours);
    console.log("rate", inputValueRate);
    console.log("total", inputValueTotal);
    console.log("note", inputNote);
  }, [inputValueHours, inputValueRate, inputValueTotal, inputNote]);

  return (
    <div className="mainDiv__PPCB">
      <div className="mainDivwidth__PPCB">
        <div className="pageTitle__PPCB">
          <p className="pageTitleText__PPCB">Send booking request</p>
        </div>
        <div className="peopleHoursRate__PPCB">
          <div className="peopleHoursRateL1__PPCB">
            <p className="words__PPCB">Need</p>
            <div className="hoursFormDiv__PPCB">
              <form className="hoursForm__PPCB">
                <input
                  ref={inputValueNumber}
                  type="number"
                  className="inputHoursForm__PPCB"
                  placeholder="eg:  2"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
                  onChange={handleTotal}
                />
              </form>
            </div>
            <p className="words__PPCB"> workers for </p>
            <div className="hoursFormDiv__PPCB">
              <form className="hoursForm__PPCB">
                <input
                  ref={inputValueHours}
                  type="number"
                  className="inputHoursForm__PPCB"
                  placeholder="eg:  2"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
                  onChange={handleTotal}
                />
              </form>
            </div>
            <p className="words__PPCB">hours</p>
          </div>
          <div className="peopleHoursRateL2__PPCB">
            <p className="words__PPCB">at rate of </p>
            <div className="hoursFormDiv__PPCB">
              <form className="hoursForm__PPCB">
                <input
                  ref={inputValueRate}
                  type="number"
                  className="inputHoursForm__PPCB"
                  placeholder="eg: 15"
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                  onChange={handleTotal}
                />
              </form>
            </div>
            <p className="words__PPCB">{"$/h per worker"}</p>
          </div>
          <div className="peopleHoursRateL25__PPCB">
            <pre className="words__PPCB">{"at "}</pre>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                value={theDateTime}
                onChange={(newValue) => {
                  setTheDateTime(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "200px",
                      "background-color": "#c4c4c4",
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            <pre className="words__PPCB">{""}</pre>
          </div>

          <div className="peopleHoursRateL3__PPCB">
            <p className="words__PPCB">Instructions: </p>
            <div className="noteFormDiv__PPCB">
              <form className="noteForm__PPCB">
                <textarea
                  ref={inputNote}
                  className="inputNoteForm__PPCB"
                  placeholder="eg: 15"
                  maxLength={200}
                  rows={3}
                  cols={27}
                />
              </form>
            </div>
          </div>
          {/* <div className="peopleHoursRateL3__PPCB">
            <button onClick={handleTotal}>Lock</button>
          </div> */}
          <div className="peopleHoursRateL4__PPCB">
            <p className="total__PPCB">
              Total: {inputValueTotal} $ x{" "}
              {inputValuePeople ? inputValuePeople : 0} ={" "}
              {inputValueTotal * inputValuePeople} $
            </p>
          </div>
          <div className="peopleHoursRateL5__PPCB">
            <p className="words__PPCB">
              Make sure to make more offers than you need to ensure placement.
              First {inputValuePeople ? inputValuePeople : 0} out of selected{" "}
              {selected.length} to accept get the booking.
            </p>
          </div>
        </div>

        <div className="removeAndList__PPCB">
          <CardHolderPF
            selected={selected}
            setSelected={setSelected}
            setIdofpartimertoshow={setIdofpartimertoshow}
            setShowPartimerProfile={setShowPartimerProfile}
          />
        </div>
        <div className="twobuttonsMainDiv__PPCB">
          <div className="twobuttonsDiv__PPCB">
            <button
              className="backbuttonN__PPCB"
              onClick={() => functionBackButtonConfirm(false)}
            >
              <div className="backbuttonDiv__PPCB">
                <p className="backbuttonp__PPCB">back</p>
              </div>
            </button>
            <button className="bookbuttonN__PPCB">
              <div className="bookbuttonDiv__PPCB">
                <p className="bookbuttonp__PPCB">BOOK</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePartimerConfirmBusiness;
