import React, { useState } from 'react';
import TournamentSearchBar from '../components/TournamentSearchBar';
import TournamentsList from '../components/TournamentsList';
import TournamentMap from '../components/TournamentMap';

function HomePage() {
    const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <h2>Gaming Tournaments</h2>
      <TournamentSearchBar
      searchInput={searchInput}
      setSearchInput={setSearchInput}  />
      <TournamentsList searchTerm={searchInput}/>
      <TournamentMap />
    </div>
  );
}

export default HomePage;
