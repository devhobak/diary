import React from "react";
import styles from "./LoginPage.module.css";
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = () => {
    axios.post("http://localhost:4000/login", {
      withCredentials: true
    }).then(res => {
      console.log(res.data);
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username" onChange={e => e.target.value}/>
      <input type="text" placeholder="password" onChange={e => e.target.value}/>
      <button onClick={login}>Login</button>
      <div className={styles.googleContainer}>
        <p>Login with Google</p>
      </div>
    </div>
  );
}
