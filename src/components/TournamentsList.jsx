import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db,auth } from "../firebase";



function TournamentsList({searchTerm}) {
  const [tournamentListData, setTournamentListData] = useState([]);
  const [joinedTournaments, setJoinedTournaments] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      try{
     const tournamentsSnapshot = await getDocs(collection(db, "tournaments"));
     const data = tournamentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTournamentListData(data);
   
        const user = auth.currentUser;
        if(user) {
          const regQuery = query(
            collection(db,"registrations"),
            where("userID","==",user.uid));
          const requestSnap = await getDocs(regQuery);
          const joinedTournamentIDs = requestSnap.docs.map(doc => doc.data().tournamentID);
          setJoinedTournaments(joinedTournamentIDs);
      } 
    }
catch(error){ console.error("tournaments not loaded sucesfuly!",error);}
}
 fetchData();
  }, []);



  const filteredTournaments=  tournamentListData.filter 
  (t => t.title.toLowerCase().includes(searchTerm.toLowerCase()));



const handleTournamentJoin = async (tournamentID)=> { const user = auth.currentUser;
  if(!user){alert("Log in to join a tournament!" )
    return;
  }

    const Q = query(
      collection(db, "registrations"),
      where("userID", "==", user.uid),
      where("tournamentID", "==", tournamentID)
    );


    
    const snapshot = await getDocs(Q);
    if (!snapshot.empty) {
      alert("You've already joined this tournament.");
      return;
    }







  try { await addDoc(collection(db,"registrations"),
    {
    tournamentID,
    userID: user.uid ,
    timestamp:new Date()
  });
  setJoinedTournaments(prev => [...prev, tournamentID]);

  alert("login has been sucesful!");
  } catch(error){
    console.error("error:",error);
    alert("Joining was unsucesful.")
  }

}

  return (
    <div className="section-title"> <h3>Available Tournaments:</h3>
    <div className="card-container">

        {filteredTournaments.map(t => (
        
        <div className="card" key={t.id}>
          <p>{t.title}</p> - {t.location}<br />

          Date {t.date?.toDate().toLocaleString()}<br />
          Available Spots {t.avalableSpots}/{t.maximumSpots} <hr />
            {joinedTournaments.includes(t.id) ? (
              <button className="joinedButton" disabled>✅</button> 
            ) : (
              <button onClick={() => handleTournamentJoin(t.id)}>Join</button>
            )}
        </div> ))}
    </div>
    </div>

  );
}

export default TournamentsList;
