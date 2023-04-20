import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./admin-login.css";
import { auth } from "./base.js";
import { useNavigate } from 'react-router-dom';
import logo from './LOGO1.png';


function UserLogin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate('/dashboard-voter-info');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <div className="logo">
      
        <img src={logo} alt="Logo" />

      </div>
      <div className="card">
        <h3> Login </h3>
        {error && <p>{error}</p>}
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}

        />

        <button onClick={login}> Login</button>
      </div>

      {/* <h4> User: </h4>
  {user?.email}

  <button onClick={logout}> Sign Out </button> */}
    </div>
  );
}

export default UserLogin;