import React from "react";

const SearchBar = ({ search, onSearch }) => {
  return (
    <div className="note-input">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
