import React, { useState } from "react";

function Authenticate({ token }) {
  const [successMessage , setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  async function handleClick() {
    try {
      // Send a GET request to the /authenticate endpoint with the token in the Authentication header
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // format we use to pass token in the Authorization header
        },
      }
      );
      const result = await response.json();
      // console.log(result); // shows the results of the Token Authentication
      setSuccessMessage(result.message);
      setUserData(result.data.username);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate Component</h2>
      {userData && <p>Logged in as: {userData}</p>} {/* displays username */}
      {successMessage && <p>{successMessage}</p>} 
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}

export default Authenticate;
