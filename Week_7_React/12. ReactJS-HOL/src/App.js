import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Element variable for conditional rendering
  let page;
  if (isLoggedIn) {
    page = <UserPage onLogout={handleLogout} />;
  } else {
    page = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      {page}
    </div>
  );
}

export default App;
