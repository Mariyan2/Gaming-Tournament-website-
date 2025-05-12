import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

function RegisterUser() {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userDetails = await addDoc(collection(db, "users"), {
        userID,
        password: userPassword,
        email: userEmail,
        isAdmin: false,
      });

      console.log("registration was succesul : userID ", userDetails.id);
    } 
    
    catch (error) {
      console.log("registration was not succesul : error -", error.message);
    }
  };

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
  <input
          type="emial"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
         <br />
    <input 
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
        />        
        <br />
        <button type="submit">REGISTER</button>
        
</form>
</div>)
}
  
export default RegisterUser;