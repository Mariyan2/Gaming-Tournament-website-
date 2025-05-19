import {auth,db} from "../firebase";
import { collection, query, where, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


function TournamentHistory(){


const [tournamentHistory,setTournamentHistory] = useState([]);
const [user,setUser] = useState(null);

useEffect(()=> {setUser(auth.currentUser);
}
,[]);

useEffect(()=>{const handleHIstory =async ()=>{
    if(!user) return;


    const Q = query( collection(db,"registrations"),
where("userID","==",user.uid)
);



const registrations = await getDoc(registrationsQuery);

const tournament = await Promise.all( registrations.docs.map( async (registrationDoc)=>{


    const {TournamentID} = registrationDoc.data();
    const tournamentref = doc(db,"tournaments",TournamentID);
    const tournamentsnap = await getDoc(tournamentref);
    return tournamentsnap.exists()
    ?{id: TournamentID,...tournamentsnap.data() }
    :null;
})
)
setTournamentHistory(tournament.filter(Boolean)); }
handleHIstory();
},[user])





return(<div>
<h3>User tournament history</h3>
{tournamentHistory.length === 0 && <p2>user has not attended tournaments</p2>
}
{tournamentHistory.map((t) =>(
<div ket = {t.id}> <br />
Date : {new Date(t.date)}<br />
Spots avalable: {t.availableSpots}/{t.maximumSpots}
<hr />
</div>



))}
</div>
);
}
export default TournamentHistory;
