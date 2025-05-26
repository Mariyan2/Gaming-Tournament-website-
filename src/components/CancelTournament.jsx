import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const CancelTournament =() =>{
const [tournamentID,setTournamentID] = useState("");

const tournamentHandle = async() =>{
    if(!tournamentID){ alert("Enter a tournament ID.")
        return;
    } 

try{
    await deleteDoc(doc(db,"tournaments",tournamentID));
    alert("tournament has been deleted!");
}
catch (error){ console.log("error :",error);
    alert("tournament has not been deleted sucesfuly!")
}
}


return(<div>
    <h2>Delete tournament</h2>
    <input 
    type="text"
    placeholder="tournament id"
    value={tournamentID}
    onChange={(e) => setTournamentID(e.target.value)}
    />
    <button onClick={tournamentHandle}>delete</button>
</div>)
}


export default CancelTournament;