import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


//SOMETHINGS BUGGED, FIX LATER
//SOMETHINGS BUGGED, FIX LATER
//SOMETHINGS BUGGED, FIX LATER
//SOMETHINGS BUGGED, FIX LATER
//SOMETHINGS BUGGED, FIX LATER

function TournamentSearchBar(){
const [searchInput,setSearchInput] = useState("")
const [tournaments,setTournaments] = useState([])



const search =async (e) =>{ 
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    if (searchInput === ''){setTournaments([]);
        return;
    }


  
    const tournaments = collection(db,'tournaments');
    const Q = query( tournaments, orderBy('title'), startAt(value), endAt(value + '\uf8ff'));
   
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setTournaments(results);
  };



  return (
    <div className="searchBar">
      <label htmlFor="tournamentSearch">Search for tournaments:</label>
      <input
        type="search"
        id="tournamentSearch"
        placeholder="tournment name :"
        value={searchInput}
        onChange={search}/>
      
      
      <ul> {tournaments.map(tournament => ( <li key={tournament.id}>{tournament.title}</li> ))}
    
    </ul>

    </div>
  );
}


export default TournamentSearchBar;
