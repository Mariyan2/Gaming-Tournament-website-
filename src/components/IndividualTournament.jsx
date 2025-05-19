import React, { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const IndividualTournament = () => {
const [tournaments,setTournament] = useState([])

useEffect(()=>{
    const tournamentHandle =async () =>{
        const query = await getDocs(collection(db,"tournaments"));
        const tournamentsList = query.docs.map(doc => ({ id:doc.id, ...doc.data()}))
setTournament(tournamentsList);    
    
    }
tournamentHandle();
},[])


return(<div>
    <h3>Tournament</h3>
    <ul> {tournaments.map(tournament => (<li key = {tournament.id}> 
        {tournament.title || "title missing"} - {tournament.date?.toDate().toLocaleDateString() || "date missing"} {tournament.location || "location missing"}
    </li>))}
    </ul>
</div>)
}

export default IndividualTournament;