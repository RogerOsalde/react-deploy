import React from 'react';
import profileImage from './img/selfie.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Roger El Maziso</h2>
      <image src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
