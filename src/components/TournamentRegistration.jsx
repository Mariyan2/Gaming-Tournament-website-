import {useState} from 'react'
import { collection ,addDoc} from "firebase/firestore";
import { db,auth} from "../firebase";



const TournamentRegister = () =>{
const[tournamentID,setTournamentID] = useState();


const registerHandle = async () => { 
    const user = auth.currentUser;
if(!user){alert("user is not logged in");
     return;
}

try{
await addDoc(collection(db,"registrations"),{
    userID:user.uid,
    tournamentID: tournamentID,
    timestamp:new Date()
});
alert("You have been sucesfuly registered!");}

catch(error){ alert("registration now sucesful! ");
    console.log(error.message);
}

}
    return(<div>
        <h2>Register for torunament: </h2>
        <input 
        type="text"
        placeholder="tournament ID"
        value={tournamentID}
        onChange={(e) => setTournamentID(e.target.value)}/>
      <br />
        <button onClick={registerHandle}>register</button>
    </div>)


}
export default TournamentRegister;