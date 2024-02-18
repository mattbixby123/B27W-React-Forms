import React, { useState } from "react";
import './SignUpForm.css';

function SignUpForn({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (username.length < 8) {
        setError("Username must be at least 8 characters long.");
        return;
      }
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log(result) // console log to show the return object from API (includes token)
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}> 
        <label>
                Username:           
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />    
        </label>   
        <label>
                Password:           
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />      
        </label>
                <button>Submit</button>  
      </form>    
    </>
  );
}

export default SignUpForn;