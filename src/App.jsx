import React, { useState } from 'react';
import './App.css'
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';
import MyCheckbox from './components/Checkbox';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <MyCheckbox />
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App
