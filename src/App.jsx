import React, { useState } from 'react';
import './App.css'
import Authenticate from './components/Authenticate';
import SignUpForn from './components/SignUpForm';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForn token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App
