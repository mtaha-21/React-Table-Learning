import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./GlobalFilter.css";
export const GlobalFilter = ({ filter, setFilter }) => {
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
            className="inpt"
            placeholder="Search by Contact Name"
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
          />
          <input type="checkbox" />
          <span className="cstyl">C</span>urrent only
          <button type="button" class="btn btn-lg btn-link ">
            Reset
          </button>
          <input class="btn btn-primary" type="button" value="Search" />
        </span>
      </div>
    </>
  );
};
