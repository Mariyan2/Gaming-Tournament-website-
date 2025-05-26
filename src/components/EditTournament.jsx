import React, { useState } from "react";
import { updateDoc ,doc } from "firebase/firestore";
import { db } from "../firebase";

const EditTournament = () =>{
const [selectedTournamentID,setSelectedTournamentID] = useState("")
const [tournamentAdmin,setTournamentAdmin] = useState("")
const [tournamentAvailableSpots,setTournamentAvailableSpots] = useState("")
const [tournamentMaxSpots,setTournamentMaxSpots] = useState("")
const [tournamentDate,setTournamentDate] = useState("")
const [tournamentLocation,setTournamentLocation] = useState("")
const [tournamentTitle,setTournamentTitle] = useState("")


const selectedTournamentHandle = async () => {
    if(!selectedTournamentID){
alert("Tournament ID has not been entered!")
return;
}
const docRef = doc(db, "tournaments", selectedTournamentID);

try { await updateDoc(docRef,{
    adminID:tournamentAdmin,
    avalableSpots:Number(tournamentAvalableSpots),
    maximumSpots:Number(tournamentMaxSpots),
    date: new Date(tournamentDate),
    location: tournamentLocation,
    title: tournamentTitle }) 
    alert ("The tournament has been sucesfuly updated!");
}
catch (error){ console.log("error message: ",error);
    alert("Update has not been sucesful");
}
};


    return(<div>
        <h3>edit tournament</h3>
        <input
        type="text"
        placeholder ="tournamentID"
        value={selectedTournamentID}
        onChange={(e) => setSelectedTournamentID(e.target.value)} 
        /> 
<br />
        <input
        type= "text"
        placeholder= "adminID"
        value = {tournamentAdmin}
        onChange={(e)=> setTournamentAdmin(e.target.value)}

        /> 
<br />
        <input
        type="number"
        placeholder="Number of avalable spots"
        value={tournamentAvailableSpots}
        onChange={(e)=> setTournamentAvailableSpots(e.target.value)}

        />
<br />
        <input
        type ="number"
        placeholder="Number of maximum spots"
        value={tournamentMaxSpots}
        onChange={(e)=>setTournamentMaxSpots(e.target.value)}
        />
<br />
        <input
        type="datetime-local"
        value= {tournamentDate}
        onChange={(e)=> setTournamentDate(e.target.value)}
         />

<br />

        <input
        type="text"
        placeholder="tournament location"
        value={tournamentLocation}
        onChange={(e) => setTournamentLocation(e.target.value)}
        /> 
    <br />
        <input
        type="text"
        placeholder="title"
        value={tournamentTitle}
        onChange={(e) => setTournamentTitle(e.target.value)}
        /> 
        <button onClick={selectedTournamentHandle}>edit</button>
    </div>)
}
export default EditTournament;