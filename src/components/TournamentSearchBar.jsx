import React from 'react';

function TournamentSearchBar({ searchInput, setSearchInput }) {

  return (
<div className="searchBar">
     
      <input
        type="search"
        id="tournamentSearch"
        placeholder="Enter tournament name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} 
      />
    </div>
  );
}


export default TournamentSearchBar;
