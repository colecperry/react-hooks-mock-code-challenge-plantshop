import React from "react";

function Search({searchInput, updateSearch}) {

  const handleSearch = (e) => {
    updateSearch(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch} value={searchInput}
      />
    </div>
  );
}

export default Search;
