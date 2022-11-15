import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./GlobalFilter.css";
export const GlobalFilters = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <>
      <div>
        <span className="styl">
          {/* Search:{" "} */}
          <input
            className=" cmpnystyl"
            placeholder="Company Name"
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
          />
          {/* <input type="checkbox" />
          <span className="cstyl">C</span>urrent only
          <button type="button" class="btn btn-lg btn-link ">
            Reset
          </button>
          <input class="btn btn-primary" type="button" value="Search" /> */}
        </span>
      </div>
      {/* <div>
        <span className="inptscndstyl">
          <input className="inptscnd" placeholder="Company Name" />
          <select></select>
        </span>
      </div> */}
      <div>
        <span className="inptstylscnd">
          <input className="inptthird" placeholder="Company Type" />
          <select></select>
          <input className="inptthird" placeholder="State" />
          <select></select>
          <input className="inptthird" placeholder="City" />
        </span>
        {/* <button type="button" class="btn btn-lg btn-link ">
          Reset
        </button> */}
        {/* <select className="dropdown-menu"></select> */}
        <button
          type="button"
          style={{ border: "none" }}
          className="btn btn-outline-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Export
        </button>
        <button type="button" class="btn btn-outline-primary">
          Add Contact
        </button>
      </div>
    </>
  );
};
