import { auth } from '../firebase';
import {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";


function UserLogin(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function loginHandle(e){
    e.preventDefault();
    try{ const userInformation = await signInWithEmailAndPassword(auth,email,password)
        const user = userInformation.user;
console.log("Login sucessful!",user)
    }
    catch(error){ console.log("An error has occured : " + error.message)}
}

return(<div>
<h2>Login</h2>
      <form onSubmit={loginHandle}>
        <label>email:  </label>

        <input
          type="EMAIL"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <br />

        <label>password: </label>

        <input
          type="PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
</div>);
}


export default UserLogin;