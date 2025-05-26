import React, { useEffect, useState } from "react";
import { auth } from "../firebase";


function ProfileInfo(){
const [user,setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {setUser(currentUser);
    
    });

    return () => unsubscribe();  },[]);

    if(!user){return <h2>You're not logged in! </h2>;}




    return(<div>
        <h3>Profile Page</h3>
        <p>Email: {user.email}</p>
        <p>UserID: {user.uid}</p>
    </div>);}

    export default ProfileInfo;
