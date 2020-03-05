import React, { useState } from "react";

const minWidth = "120px";

const CurrentYears = ({ addYear, data, setData }) => {
  const [year, setYear] = useState(2020);

  return (
    <React.Fragment>
      <hr style={{ position: "relative", top: "50px" }}></hr>
      <h3 style={{ textAlign: "center" }}>Years</h3>

      <div className="list-group">
        {data.map(thisYear => (
          <button
            type="button"
            className="list-group-item list-group-item-action btn-sm"
            style={{ textAlign: "center", color: thisYear.color, minWidth }}
            key={thisYear.year}
            onClick={() =>
              setData(prevState =>
                prevState.filter(index => index.year !== thisYear.year)
              )
            }
          >
            {thisYear.year}
          </button>
        ))}

        <button
          type="button"
          className="list-group-item list-group-item-action btn-sm"
          style={{ textAlign: "center", minWidth }}
          onClick={() => addYear(year)}
        >
          Add: &nbsp;
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            value={year}
            onChange={({ target }) => setYear(target.value)}
            onClick={event => {
              event.stopPropagation();
            }}
          />
        </button>
      </div>
    </React.Fragment>
  );
};

export default CurrentYears;
