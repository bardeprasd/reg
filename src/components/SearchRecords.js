import React from "react";
import "./SearchRecords.css";

const SearchRecords = () => {
  return (
    <div className="search-container">
      <h3>Search Records</h3>
      <div className="form-row">
        <label>Message Name</label>
        <select>
          <option>Select...</option>
        </select>
        <label>Reference Date</label>
        <input type="date" value="2024-12-04" />
      </div>
      <div className="buttons">
        <button className="btn request">Request data</button>
        <button className="btn clear">Clear</button>
      </div>
    </div>
  );
};

export default SearchRecords;
