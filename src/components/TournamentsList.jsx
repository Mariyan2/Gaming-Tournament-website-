import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TournamentsList() {
  const [tournamentListData, setTournamentListData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "tournaments"))
      .then(tournamentsSnapshot => {
        const data = tournamentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTournamentListData(data);}) 
        
      .catch(error => console.log(error));
  }, []);

  return (
    <div> <h3>Available Tournaments:</h3>
      
      {tournamentListData.map(t => (
        
        <div key={t.id}>
          <strong>{t.title}</strong> - {t.location}<br />

          Date {t.date?.toDate().toLocaleString()}<br />
          Available Spots {t.avalableSpots}/{t.maximumSpots} <hr />
        
        </div> ))}
    </div>
  );
}

export default TournamentsList;
