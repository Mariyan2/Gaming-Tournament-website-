import React ,{useState} from "react";


const [userID, setUserID] = useState();
const [userPassword, setUserPassword] = useState();
const [userEmail, setUserEmail] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering = >", {
      userID, userEmail, userPassword, isUserAdmin,
    });
//FIRESTORE PART GOES HERE
  };

  
function registerUser(){
    return(<div>
<h2>Register</h2>


<form onSubmit={handleRegister}>
       <input
          type="text"
          placeholder="Name"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          required
        />
         <br />

    <input>  
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
        </input>        
        <br />
        <button type="submit">REGISTER</button>
        
</form>
</div>)
}

export default registerUser;