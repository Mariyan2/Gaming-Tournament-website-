import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


function CreateTournament(){
const [tournamentName,setTournamentName] = useState("")
const [tournamentDate,setTournamentDate] = useState("")
const [tournamentLocation,setTournamentLocation] = useState("")
const [tournamentAvailableSpots ,setTournamentAvalableSpots] = useState("")

const handleSubmit = async (e) =>{
    e.preventDefault();

const createdTournament = { 
    title: tournamentName, 
    date : new Date(tournamentDate),
    location : tournamentLocation,
    maximumSpots:Number(tournamentAvailableSpots),
    avalableSpots: Number(tournamentAvailableSpots),
    adminID:"TESTADMINID"
};

try{ await addDoc(collection(db,"tournaments"),createdTournament)
    alert("The tournament has been sucesfuly created!");
}

catch(error){
  console.log("error : ",error);
  alert("tournament was not created sucesfuly!")
}
}




return(<div>
<h4>create tournament: </h4>
<form onSubmit={handleSubmit}> 
<label>tournament name : </label>
<input 
type = "text"
value= {tournamentName}
onChange= {(e) => setTournamentName(e.target.value)} /> 
<br />


    <label>date :</label>
    <input    
    type="datetime-local"
    value={tournamentDate}
    onChange={(e) => setTournamentDate(e.target.value)}/>

<br />
    <label>location:</label>
    <input 
    type="text"
    value={tournamentLocation}
    onChange={(e) => setTournamentLocation(e.target.value)}
    />

<br />

<label>avalable spots: </label>
<input
type="number"
value={tournamentAvailableSpots}
onChange={(e) => setTournamentAvalableSpots(e.target.value)}
/>

<br />



    <button type="submit">Create</button>
</form>



</div>

)

}




export default CreateTournament;